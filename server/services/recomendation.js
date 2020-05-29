const { planejamentosService } = require('./planejamentos')
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
  GOSTA_DO_LUGAR: 'GOSTA_DO_LUGAR',
  CONHECER_OUTRO: 'CONHECER_OUTRO',
  GOSTA_DA_TAG: 'GOSTA_DA_TAG',
}

class RecommendationService {
  async recommend({ user, gostou }) {
    let messages = []
    const { estadoResposta } = user

    if (estadoResposta) {
      messages = await this._getProximasRecomendacoes(user, gostou)
    } else {
      messages = await this._getPrimeiraRecomendacao(user)
    }

    return messages
  }

  async _getPrimeiraRecomendacao(user) {
    let messages = []
    await mongoService.openConnection()

    const cidadeDb = await mongoService.db.collection('cidade').findOne({ nome: user.cidade.toLowerCase() })

    if (cidadeDb) {
      user.cidade = cidadeDb

      await this._setNewLocalWithNewTag(user)

      user.estadoResposta = ESTADOS_RESPOSTA.GOSTA_DA_TAG
      messages = [`Gostaria de conhecer ${user.lastTagDesc} em ${user.cidade.nome}?`]
    } else {
      user.local = null
      messages = ['Não conheço esse lugar']
    }

    mongoService.closeConnection()

    return { messages }
  }

  async _getProximasRecomendacoes(user, gostou) {
    let returnVal

    await mongoService.openConnection()

    if (user.estadoResposta === ESTADOS_RESPOSTA.GOSTA_DO_LUGAR) {
      user.excluirLocais.push(user.lastPlace._id)
      if (gostou === true) {
        user.locaisCurtidos.push(user.lastPlace)

        await planejamentosService.add(user.idUser, user)

        user.estadoResposta = ESTADOS_RESPOSTA.CONHECER_OUTRO

        returnVal = {
          messages: [`Quer mais dicas de ${user.lastTagDesc} em ${user.cidade.nome}?`],
        }
      } else if (gostou === false) {
        returnVal = await this._recomendarOutroMesmaTag(user)
      }
    } else if (user.estadoResposta === ESTADOS_RESPOSTA.CONHECER_OUTRO) {
      if (gostou === true) {
        returnVal = await this._recomendarOutroMesmaTag(user)
      } else if (gostou === false) {
        returnVal = await this._recomendarOutraTag(user)
      }
    } else if (user.estadoResposta === ESTADOS_RESPOSTA.GOSTA_DA_TAG) {
      if (gostou === true) {
        returnVal = await this._recomendarLugar(user)
      } else if (gostou === false) {
        returnVal = this._didNotLikeTheTag(user)
      }
    }

    if (!returnVal) returnVal = this._naoEntendiSeGostou()

    mongoService.closeConnection()
    return returnVal
  }

  async _didNotLikeTheTag(user) {
    user.excluirTags.push(user.lastTag)

    await mongoService.openConnection()
    await this._setNewLocalWithNewTag(user)

    mongoService.closeConnection()

    return { messages: [`E que tal conhecer ${user.lastTagDesc} em ${user.cidade.nome}?`] }
  }

  async _setNewLocalWithNewTag(user) {
    const lugaresOptions = { cidadeId: user.cidade._id }
    if (user.excluirTags.length) {
      lugaresOptions.tags = { $nin: user.excluirTags }
    }

    if (user.excluirLocais.length) {
      lugaresOptions._id = { $nin: user.excluirLocais }
    }

    const lugaresDb = await mongoService.db.collection('lugar').aggregate([{ $match: lugaresOptions }, ...this._getSortingLugarAggregate()])

    const onePlace = await lugaresDb.toArray()

    const tipoLugar = PONTOS_INTERESSE[onePlace[0].tags[0]]

    user.lastTagDesc = tipoLugar
    user.lastTag = onePlace[0].tags[0]
    user.lastPlace = onePlace[0]
    user.estadoResposta = ESTADOS_RESPOSTA.GOSTA_DA_TAG
  }

  async _recomendarLugar(user) {
    user.liked.push(user.lastTag)
    user.estadoResposta = ESTADOS_RESPOSTA.GOSTA_DO_LUGAR

    let images = []
    if (user.lastPlace.images.length) {
      images = user.lastPlace.images.map((i) => this._getImageUrl(i))
    }

    const returnObj = {
      title: user.lastPlace.nome,
      endereco: user.lastPlace.endereco,
      googleUrl: user.lastPlace.googleUrl,
      images,
      reviews: user.lastPlace.reviews,
      descricao: `${user.lastPlace.descricao} Localizado em ${user.cidade.nome}`,
      messages: [`Quer adicionar esse local a sua lista de lugares para visitar em ${user.cidade.nome}?`],
    }

    return returnObj
  }

  async _recomendarOutroMesmaTag(user) {
    const lugaresDb = await mongoService.db.collection('lugar').aggregate([
      {
        $match: {
          cidadeId: user.cidade._id,
          _id: { $nin: user.excluirLocais },
          tags: { $in: [user.lastTag] },
        },
      },
      ...this._getSortingLugarAggregate(),
    ])

    const placeDb = await lugaresDb.toArray()
    user.lastPlace = placeDb[0]
    return this._recomendarLugar(user)
  }

  async _recomendarOutraTag(user) {
    user.excluirTags.push(user.lastTag)

    await this._setNewLocalWithNewTag(user)
    return {
      messages: [`Gostaria de conhecer ${user.lastTagDesc} em ${user.cidade.nome}?`],
    }
  }

  _naoEntendiSeGostou() {
    return { messages: ['Não entendi se gostou ou não'] }
  }

  _getImageUrl(imageId) {
    return PATHS.CONTROLLER.IMAGE_GOOGLE_ID + '?id=' + imageId
  }

  _getSortingLugarAggregate() {
    return [
      {
        $addFields: {
          reviews_size: {
            $cond: {
              if: {
                $isArray: '$reviews',
              },
              then: {
                $size: '$reviews',
              },
              else: 0,
            },
          },
        },
      },
      {
        $sort: {
          reviews_size: -1,
        },
      },
      {
        $limit: 1,
      },
    ]
  }
}

module.exports.recommendationService = new RecommendationService()
