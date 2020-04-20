const { mongoService } = require('./mongo')
const { PATHS } = require('../constants/paths')

const PONTOS_INTERESSE = {
  amusement_park: 'parques',
  art_gallery: 'galerias de arte',
  casino: 'cassinos',
  church: 'igrejas cristãs',
  hindu_temple: 'templos hindus',
  mosque: 'mesquit',
  museum: 'museus',
  park: 'parques',
  shopping_mall: 'shoppings',
  synagogue: 'sinagogas',
  tourist_attraction: 'atrações turisticas',
  zoo: 'zoológicos',
}

const ESTADOS_RESPOSTA = {
  GOSTA_DO_LUGAR: 0,
  CONHECER_OUTRO: 1,
}

class RecommendationService {
  constructor() {
    this.customers = {}
  }

  async recommend({ local, gostou, customer_id }) {
    let messages = []
    const customerOption = this.customers[customer_id]

    if (!customerOption) {
      this.customers[customer_id] = {
        cidade: local,
        estadoResposta: undefined,
        lastTag: undefined,
        excluirLocais: [],
        excluirTags: [],
        liked: [],
        locaisCurtidos: [],
      }

      messages = await this._getPrimeiraRecomendacao(local, this.customers[customer_id])
    } else {
      messages = await this._getProximasRecomendacoes(customerOption, gostou)
    }

    return messages
  }

  async _getPrimeiraRecomendacao(local, customerOption) {
    let messages = []
    await mongoService.openConnection()

    const cidadeDb = await mongoService.db.collection('cidade').findOne({ nome: local.toLowerCase() })

    if (cidadeDb) {
      customerOption.cidade = cidadeDb

      await this._setNewLocalWithNewTag(customerOption)

      messages = [`Gostaria de conhecer ${customerOption.lastTagDesc} em ${customerOption.cidade.nome}?`]
    } else {
      messages = ['Não conheço esse lugar']
    }

    mongoService.closeConnection()

    return { texts: messages }
  }

  async _getProximasRecomendacoes(customerOption, gostou) {
    let returnVal

    await mongoService.openConnection()

    if (customerOption.estadoResposta === ESTADOS_RESPOSTA.GOSTA_DO_LUGAR) {
      customerOption.excluirLocais.push(customerOption.lastPlace._id)
      if (gostou === true) {
        customerOption.locaisCurtidos.push(customerOption.lastPlace)
        customerOption.estadoResposta = ESTADOS_RESPOSTA.CONHECER_OUTRO

        returnVal = {
          texts: [`Quer mais dicas de ${customerOption.lastTagDesc} em ${customerOption.cidade.nome}?`],
        }
      } else if (gostou === false) {
        returnVal = await this._recomendarOutroMesmaTag(customerOption)
      }
    } else if (customerOption.estadoResposta === ESTADOS_RESPOSTA.CONHECER_OUTRO) {
      if (gostou === true) {
        returnVal = await this._recomendarOutroMesmaTag(customerOption)
      } else if (gostou === false) {
        returnVal = await this._recomendarOutraTag(customerOption)
      }
    } else {
      if (gostou === true) {
        returnVal = await this._recomendarLugar(customerOption)
      } else if (gostou === false) {
        //customerOption.unliked.push(customerOption.lastTag)
      }
    }

    if (!returnVal) returnVal = this._naoEntendiSeGostou()

    mongoService.closeConnection()
    return returnVal
  }

  async _setNewLocalWithNewTag(customerOption) {
    const lugaresOptions = { cidadeId: customerOption.cidade._id }
    if (customerOption.excluirTags.length) {
      lugaresOptions.tags = { $nin: customerOption.excluirTags }
    }

    if (customerOption.excluirLocais.length) {
      lugaresOptions._id = { $nin: customerOption.excluirLocais }
    }

    const lugaresDb = await mongoService.db.collection('lugar').find(lugaresOptions)

    const onePlace = await lugaresDb.limit(1).toArray()

    const tipoLugar = PONTOS_INTERESSE[onePlace[0].tags[0]]

    customerOption.lastTagDesc = tipoLugar
    customerOption.lastTag = onePlace[0].tags[0]
    customerOption.lastPlace = onePlace[0]
    customerOption.estadoResposta = undefined
  }

  async _recomendarLugar(customerOption) {
    customerOption.liked.push(customerOption.lastTag)
    customerOption.estadoResposta = ESTADOS_RESPOSTA.GOSTA_DO_LUGAR

    let images = []
    if (customerOption.lastPlace.images.length) {
      images = customerOption.lastPlace.images.map((i) => this._getImageUrl(i))
    }

    const returnObj = {
      title: customerOption.lastPlace.nome,
      endereco: customerOption.lastPlace.endereco,
      googleUrl: customerOption.lastPlace.googleUrl,
      images,
      reviews: customerOption.lastPlace.reviews,
      descricao: `${customerOption.lastPlace.descricao} Localizado em ${customerOption.cidade.nome}`,
      texts: [`Quer adicionar esse local a sua lista de lugares para visitar em ${customerOption.cidade.nome}?`],
    }

    return returnObj
  }

  async _recomendarOutroMesmaTag(customerOption) {
    const lugaresDb = await mongoService.db
      .collection('lugar')
      .find({ cidadeId: customerOption.cidade._id, _id: { $nin: customerOption.excluirLocais }, tags: { $in: [customerOption.lastTag] } })

    const placeDb = await lugaresDb.limit(1).toArray()
    customerOption.lastPlace = placeDb[0]
    return this._recomendarLugar(customerOption)
  }

  async _recomendarOutraTag(customerOption) {
    customerOption.excluirTags.push(customerOption.lastTag)

    await this._setNewLocalWithNewTag(customerOption)
    return {
      texts: [`Gostaria de conhecer ${customerOption.lastTagDesc} em ${customerOption.cidade.nome}?`],
    }
  }

  _naoEntendiSeGostou() {
    return { texts: ['Não entendi se gostou ou não'] }
  }

  _getImageUrl(imageId) {
    return PATHS.CONTROLLER.IMAGE_GOOGLE_ID + '?id=' + imageId
  }
}

module.exports.recommendationService = new RecommendationService()
