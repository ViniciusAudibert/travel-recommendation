const uuidv4 = require('uuid').v4
const AssistantV2 = require('ibm-watson/assistant/v2')
const { IamAuthenticator } = require('ibm-watson/auth')

const assistant = new AssistantV2({
  version: 'Development',
  authenticator: new IamAuthenticator({
    apikey: 'YE4AnSiMZOV5j4oJcpjSaLQhX93sftXcutxC9bTJUFIx',
  }),
  url: 'https://api.au-syd.assistant.watson.cloud.ibm.com/instances/b99ae937-3073-4c9d-b94d-17719d96d666',
})

assistant
  .createSession({
    assistantId: uuidv4(),
  })
  .then(res => {
    console.log(JSON.stringify(res.result, null, 2))
  })
  .catch(err => {
    console.log(err)
  })
