const AssistantV1 = require('ibm-watson/assistant/v1')
const { IamAuthenticator } = require('ibm-watson/auth')

class WatsonService {
  constructor() {
    this.workspaceId = 'fbdbc131-d113-42ac-b391-c25e9abfc403'
    this.ASSISTENT_INST = new AssistantV1({
      version: '2019-04-15',
      url: 'https://api.au-syd.assistant.watson.cloud.ibm.com/instances/b99ae937-3073-4c9d-b94d-17719d96d666',
      authenticator: new IamAuthenticator({
        apikey: 'YE4AnSiMZOV5j4oJcpjSaLQhX93sftXcutxC9bTJUFIx',
      }),
    })
  }

  async text({ message, customer_id }) {
    try {
      const request = await this.ASSISTENT_INST.message({
        workspaceId: this.workspaceId,
        input: { text: message },
        headers: {
          customer_id,
        },
      })

      return request.result
    } catch (error) {
      console.log(error)
    }
  }

  async welcome({ customer_id }) {
    return this.text({ customer_id, message: 'oi' })
  }
}

module.exports.watsonService = new WatsonService()
