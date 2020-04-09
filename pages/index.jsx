import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Chat } from '../src/components/Chat'

import { v4 as uuidv4 } from 'uuid'
import AssistantV2 from 'ibm-watson/assistant/v2'
import { IamAuthenticator } from 'ibm-watson/auth'

const Index = ({ welcomeMessages }) => {
  const [messages, setMessages] = useState(welcomeMessages)

  useEffect(() => {
    console.log('started')
    if (typeof window !== 'undefined') {
      const assistant = new AssistantV2({
        version: '2019-04-07',
        authenticator: new IamAuthenticator({
          apikey: 'YE4AnSiMZOV5j4oJcpjSaLQhX93sftXcutxC9bTJUFIx',
        }),
        url: 'https://gateway.watsonplatform.net/assistant/api',
      })

      assistant
        .createSession({
          assistantId: uuidv4(),
        })
        .then((res) => {
          console.log(JSON.stringify(res.result, null, 2))
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }, [])

  function onEnter(message) {
    messages.push({
      id: 'user-message-' + messages.length,
      message,
      isUser: true,
    })

    setMessages(messages)
  }

  return (
    <div>
      <Chat messages={messages} onEnter={onEnter} />
    </div>
  )
}

Index.getInitialProps = async () => {
  const { data } = await axios.get('http://localhost:3000/api/messages/welcome')

  return { welcomeMessages: data.messages }
}

export default Index
