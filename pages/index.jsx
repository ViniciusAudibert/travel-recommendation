import React, { useState, useEffect, useCallback, useMemo } from 'react'
import axios from 'axios'
import { Chat } from '../src/components/Chat'
import { MessageUtil } from '../src/mappers/message'
import { v4 } from 'uuid'

const Index = () => {
  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(true)

  const idUser = useMemo(() => {
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
      const { data } = await axios.get('/api/messages/welcome', { params: { customer_id: idUser } })
      const mappedMessages = data.messages.map((m) => MessageUtil.serverDataToChatMessage(m))
      setMessages(mappedMessages.flat())
      setLoading(false)
    }

    welcomeFetch()
  }, [])

  useEffect(() => {
    async function askLudilene(message) {
      const resp = await axios.get('/api/messages/talk', { params: { message, customer_id: idUser } })
      setMessages((m) => m.concat(MessageUtil.serverDataToChatMessage(resp.data)))
      setLoading(false)
    }

    const lastMessage = messages[messages.length - 1]

    if (lastMessage && lastMessage.isUser) {
      askLudilene(lastMessage.message)
    }
  }, [messages, setMessages, setLoading])

  const onEnter = useCallback(
    (message) => {
      setLoading(true)
      setMessages((m) => {
        m.push({
          id: 'user-message-' + m.length,
          message,
          isUser: true,
        })
        return [...m]
      })
    },
    [setMessages, setLoading]
  )

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <Chat messages={messages} onEnter={onEnter} loading={loading} />
    </div>
  )
}

export default Index
