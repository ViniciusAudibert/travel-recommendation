const { PATHS } = require('../constants/paths')
const { watsonService } = require('../services/watson')
const { recommendationService } = require('../services/recomendation')

class MessageController {
  constructor() {
    this.where = null
    this.liked = []
    this.unliked = []

    this.talkTo = this.talkTo.bind(this)
    this.welcomeMessage = this.welcomeMessage.bind(this)
  }

  async talkTo(req, res) {
    try {
      const message = req.param('message')
      const customer_id = req.param('customer_id')

      if (message) {
        const response = await watsonService.text({ message, customer_id })
        const localEntity = response.entities.find((e) => e.entity === 'lugar')
        const intentAfirmativo = response.intents.find((e) => e.intent === 'afirmativo')
        const intentNegativo = response.intents.find((e) => e.intent === 'negativo')

        const gostou = intentAfirmativo ? true : intentNegativo ? false : undefined

        if (localEntity || this.where) {
          this.where = localEntity ? localEntity.value.toLowerCase() : this.where
          const recomendations = await recommendationService.recommend({ local: this.where, customer_id, gostou })
          return res.json({
            ...recomendations,
            all: response,
          })
        } else {
          return res.json({
            texts: response.output.text,
            all: response,
          })
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
    const customer_id = req.param('customer_id')
    const response = await watsonService.welcome({ customer_id })

    return res.json({
      texts: response.output.text,
    })
  }
}

const { TALK, WELCOME } = PATHS.CONTROLLER

module.exports = (server) => {
  const controller = new MessageController()

  server.get(WELCOME, controller.welcomeMessage)
  server.get(TALK, controller.talkTo)
}
