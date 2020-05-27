const { PATHS } = require('../constants/paths')
const { watsonService } = require('../services/watson')
const { userService } = require('../services/user')
const { chatService } = require('../services/chat')
const { recommendationService } = require('../services/recomendation')

class MessageController {
  constructor() {
    this.cacheUser = {}

    this.talkTo = this.talkTo.bind(this)
    this.welcomeMessage = this.welcomeMessage.bind(this)
  }

  async talkTo(req, res) {
    try {
      const message = req.param('message')
      const customer_id = req.param('customer_id')

      if (customer_id) {
        if (!this.cacheUser[customer_id]) {
          res.status(400).json({
            message: 'Usuário não inicializado',
          })
        }
      } else {
        res.status(400).json({
          message: 'Parametro `customer_id` não enviado',
        })
      }

      if (message) {
        await chatService.add(customer_id, {
          isUser: true,
          messages: [message],
        })

        const response = await watsonService.text({ message, customer_id })
        const localEntity = response.entities.find((e) => e.entity === 'lugar')
        const intentAfirmativo = response.intents.find((e) => e.intent === 'afirmativo')
        const intentNegativo = response.intents.find((e) => e.intent === 'negativo')

        const gostou = intentAfirmativo ? true : intentNegativo ? false : undefined
        const userCached = this.cacheUser[customer_id]

        if (!userCached.where && localEntity) {
          userCached.where = localEntity.value.toLowerCase()
          userService.update(customer_id, { where: userCached.where })
        }
        
        if (userCached.where) {
          const recomendations = await recommendationService.recommend({ local: userCached.where, customer_id, gostou })

          const chatMessage = {
            isUser: false,
            ...recomendations,
          }
          await chatService.add(customer_id, chatMessage)

          return res.json(chatMessage)
        } else {
          const chatMessage = {
            messages: response.output.text,
            isUser: false,
          }

          await chatService.add(customer_id, chatMessage)

          return res.json(chatMessage)
        }
      } else {
        res.status(400).json({
          message: 'Parametro `message` não enviado',
        })
      }
    } catch (ex) {
      console.log(ex)

      res.status(500).json({
        message: 'Ocorreu um erro inesperado',
      })
    }
  }

  async welcomeMessage(req, res) {
    try {
      const customer_id = req.param('customer_id')

      if (!customer_id) {
        res.status(400).json({
          message: 'Parametro `customer_id` não enviado',
        })
      }

      const dbUser = await userService.get(customer_id)
      let chatMessages
      if (dbUser) {
        this.cacheUser[customer_id] = dbUser
        chatMessages = await chatService.get(customer_id)
      } else {
        this.cacheUser[customer_id] = {}
        await userService.add(customer_id)
        const response = await watsonService.welcome({ customer_id })
        const chatMessage = {
          messages: response.output.text,
          isUser: false,
        }

        await chatService.add(customer_id, chatMessage)
        chatMessages = [chatMessage]
      }

      return res.json({
        messages: chatMessages,
      })
    } catch (ex) {
      console.log(ex)

      res.status(500).json({
        message: 'Ocorreu um erro inesperado',
      })
    }
  }
}

const { TALK, WELCOME } = PATHS.CONTROLLER

module.exports = (server) => {
  const controller = new MessageController()

  server.get(WELCOME, controller.welcomeMessage)
  server.get(TALK, controller.talkTo)
}
