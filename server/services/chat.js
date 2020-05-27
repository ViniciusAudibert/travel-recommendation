const { mongoService } = require('./mongo')

class ChatService {
  async add(idUser, chat) {
    await mongoService.openConnection()

    await mongoService.db.collection('chat').insertOne({
      idUser,
      ...chat,
    })

    await mongoService.closeConnection()
  }

  async get(idUser) {
    await mongoService.openConnection()

    const chat = await mongoService.db.collection('chat').find({
      idUser,
    })

    const chatMessages = await chat.toArray()
    await mongoService.closeConnection()

    return chatMessages
  }
}

module.exports.chatService = new ChatService()
