const { mongoService } = require('./mongo')

class PlanejamentosService {
  async add(idUser, user) {
    await mongoService.openConnection()

    await mongoService.db.collection('planejamentos').insertOne({
      idUser,
      nomeCidade: user.cidade.nome,
      lugar: user.lastPlace,
    })

    await mongoService.closeConnection()
  }

  async get(idUser) {
    await mongoService.openConnection()

    const places = await mongoService.db.collection('planejamentos').find({
      idUser,
    })

    const placesArr = await places.toArray()

    await mongoService.closeConnection()

    return placesArr.reduce((curr, next) => {
      const index = curr.findIndex((i) => i.nomeCidade === next.nomeCidade)

      if (index != null) {
        curr.push({
          nomeCidade: next.nomeCidade,
          lugares: [next.lugar],
        })
      } else {
        curr[index].lugares.push(next.lugar)
      }

      return curr
    }, [])
  }
}

module.exports.planejamentosService = new PlanejamentosService()
