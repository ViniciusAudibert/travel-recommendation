const { mongoService } = require('./mongo')

class UserService {
  async add(idUser) {
    await mongoService.openConnection()

    await mongoService.db.collection('user').insertOne({
      idUser,
    })

    await mongoService.closeConnection()
  }

  async update(idUser, data) {
    await mongoService.openConnection()

    await mongoService.db.collection('user').updateOne(
      {
        idUser,
      },
      data
    )

    await mongoService.closeConnection()
  }

  async get(idUser) {
    await mongoService.openConnection()

    const user = await mongoService.db.collection('user').findOne({
      idUser,
    })

    await mongoService.closeConnection()

    return user
  }
}

module.exports.userService = new UserService()
