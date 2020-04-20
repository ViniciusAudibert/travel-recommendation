const { MongoClient } = require('mongodb')

class MongoService {
  constructor() {
    this.db = undefined
    this.client = undefined
  }

  async openConnection() {
    console.log('Creating connection...')

    return new Promise((resolve, reject) => {
      const url = 'mongodb+srv://travel-recommendation:<password>@cluster0-yple6.mongodb.net/test?retryWrites=true&w=majority'

      MongoClient.connect(
        url,
        {
          auth: {
            user: 'travel-recommendation',
            password: 'qwe123',
          },
          useUnifiedTopology: true,
        },
        (err, client) => {
          if (err) reject(err)

          const dbName = 'travel-recommendation'
          const db = client.db(dbName)

          this.client = client
          this.db = db

          console.log('Conection created!')
          resolve()
        }
      )
    })
  }

  closeConnection() {
    console.log('Conection close')

    if (this.client) this.client.close()
  }
}

module.exports.mongoService = new MongoService()
