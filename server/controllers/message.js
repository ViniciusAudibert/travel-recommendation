const { PATHS } = require('../constants/paths')
const { watsonService } = require('../services/watson')
const { userService } = require('../services/user')
const { chatService } = require('../services/chat')
const { recommendationService, ESTADOS_RESPOSTA } = require('../services/recomendation')

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

        const intentOutraCidade = response.intents.find((e) => e.intent === 'conhecer_outra_cidade')
        const intentOutraTag = response.intents.find((e) => e.intent === 'conhecer_outro_tipo_de_lugar')
        const intentAfirmativo = response.intents.find((e) => e.intent === 'afirmativo')
        const intentNegativo = response.intents.find((e) => e.intent === 'negativo')

        let gostou = intentAfirmativo ? true : intentNegativo ? false : undefined
        const userCached = this.cacheUser[customer_id]

        const hasNewEntity = !userCached.cidade && localEntity
        const hasEntityChanged = !!userCached.cidade && !!localEntity && userCached.cidade !== localEntity.value.toLowerCase()

        if (hasNewEntity || hasEntityChanged) {
          userCached.cidade = localEntity.value.toLowerCase()
          userCached.estadoResposta = null
          userCached.excluirTags = []
        } else if (intentOutraCidade) {
          userCached.cidade = null
          userCached.estadoResposta = null
          userCached.excluirTags = []

          await userService.update(userCached.idUser, userCached)
        } else if (intentOutraTag) {
          userCached.estadoResposta = ESTADOS_RESPOSTA.GOSTA_DA_TAG
          gostou = false

          await userService.update(userCached.idUser, userCached)
        }

        if (userCached.cidade) {
          const recomendations = await recommendationService.recommend({ user: userCached, gostou })

          const chatMessage = {
            isUser: false,
            ...recomendations,
          }

          await chatService.add(customer_id, chatMessage)
          await userService.update(userCached.idUser, userCached)

          return res.json(chatMessage)
        }

        const chatMessage = {
          messages: response.output.text,
          isUser: false,
        }

        await chatService.add(customer_id, chatMessage)

        return res.json(chatMessage)
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
        this.cacheUser[customer_id] = await userService.add(customer_id)
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
