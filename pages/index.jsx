import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Chat } from '../src/components/Chat'

const Index = ({ welcomeMessages }) => {
  const [messages, setMessages] = useState(welcomeMessages)

  useEffect(() => {
    console.log('asdsad')
  }, [messages])

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
