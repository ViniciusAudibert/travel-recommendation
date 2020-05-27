import React, { useState, useEffect, useCallback, useMemo } from 'react'
import axios from 'axios'
import { Chat } from '../src/components/Chat'
import { MessageUtil } from '../src/mappers/message'
import { v4 } from 'uuid'

const Index = () => {
  const [messages, setMessages] = useState([])

  const userId = useMemo(() => {
    if (typeof window !== 'undefined') {
      let id = localStorage.getItem('USER_ID')

      if (!id) {
        id = `${Date.now()}--${v4()}`
        localStorage.setItem('USER_ID', id)
      }

      return id
    }
  }, [])

  useEffect(() => {
    const welcomeFetch = async () => {
      const { data } = await axios.get('/api/messages/welcome', { params: { customer_id: userId } })
      const mappedMessages = data.messages.map((m) => MessageUtil.serverDataToChatMessage(m))
      setMessages(mappedMessages.flat())
    }

    welcomeFetch()
  }, [])

  useEffect(() => {
    async function askLudilene(message) {
      const resp = await axios.get('/api/messages/talk', { params: { message, customer_id: userId } })
      setMessages((m) => m.concat(MessageUtil.serverDataToChatMessage(resp.data)))
    }

    const lastMessage = messages[messages.length - 1]

    if (lastMessage && lastMessage.isUser) {
      askLudilene(lastMessage.message)
    }
  }, [messages, setMessages])

  const onEnter = useCallback(
    (message) => {
      setMessages((m) => {
        m.push({
          id: 'user-message-' + m.length,
          message,
          isUser: true,
        })
        return [...m]
      })
    },
    [setMessages]
  )

  return (
    <div>
      <Chat messages={messages} onEnter={onEnter} />
    </div>
  )
}

export default Index
