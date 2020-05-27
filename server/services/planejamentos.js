const { mongoService } = require('./mongo')

class PlanejamentosService {
  async add(idUser, placeData) {
    await mongoService.openConnection()

    await mongoService.db.collection('planejamentos').insertOne({
      idUser,
      ...placeData,
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

    return placesArr
  }
}

module.exports.planejamentosService = new PlanejamentosService()
