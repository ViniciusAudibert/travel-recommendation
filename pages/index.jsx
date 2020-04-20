import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import { Chat } from '../src/components/Chat'
import { v4 } from 'uuid'
import { MESSAGE_TYPE } from '../src/variables/message'

const USER_ID = v4()

const Index = ({ welcomeMessages }) => {
  const [messages, setMessages] = useState(
    welcomeMessages.texts.map((m, i) => ({
      id: 'ludmila-message-' + i,
      message: m,
      type: MESSAGE_TYPE.MESSAGE,
      isUser: false,
    }))
  )

  useEffect(() => {
    async function askLudilene(message) {
      const resp = await axios.get('http://localhost:3000/api/messages/talk', { params: { message, customer_id: USER_ID } })
      setMessages((m) => {
        const { endereco, googleUrl, images, reviews, texts, title, descricao } = resp.data

        if (title) {
          m.push({
            id: 'ludmila-message-' + m.length,
            type: MESSAGE_TYPE.TITLE,
            message: title,
            isUser: false,
          })
        }

        if (descricao) {
          m.push({
            id: 'ludmila-message-' + m.length,
            type: MESSAGE_TYPE.MESSAGE,
            message: descricao,
            isUser: false,
          })
        }

        if (images && images.length) {
          m.push({
            id: 'ludmila-message-' + m.length,
            type: MESSAGE_TYPE.IMAGE,
            message: images,
            isUser: false,
          })
        }
        if (googleUrl || endereco) {
          m.push({
            id: 'ludmila-message-' + m.length,
            type: MESSAGE_TYPE.GOOGLE_LINK,
            message: endereco,
            link: googleUrl,
            isUser: false,
          })
        }

        if (reviews && reviews.length) {
          m.push({
            id: 'ludmila-message-' + m.length,
            type: MESSAGE_TYPE.REVIEW,
            message: reviews,
            isUser: false,
          })
        }

        texts.forEach((r) => {
          m.push({
            id: 'ludmila-message-' + m.length,
            message: r,
            isUser: false,
          })
        })

        return [...m]
      })
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

Index.getInitialProps = async () => {
  const { data } = await axios.get('http://localhost:3000/api/messages/welcome')

  return { welcomeMessages: data }
}

export default Index
