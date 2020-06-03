import './style.scss'
import React, { useState, useEffect, useRef } from 'react'
import { Form, Button, FormControl } from 'react-bootstrap'
import { ChatIcon } from './icon'
import { ChatMessageByType } from './partials/message-by-type'

export const Chat = (props) => {
  const { onEnter, messages, loading } = props
  const [value, setValue] = useState('')
  const messagesRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current._reactInternalFiber.child.stateNode.focus()
  }, [])

  useEffect(() => {
    document.body.scrollTo(0, document.body.scrollHeight)
    messagesRef.current.scrollTo(0, messagesRef.current.scrollHeight)

    inputRef.current._reactInternalFiber.child.stateNode.focus()
  }, [messages.length])

  function handleSubmit(e) {
    e.preventDefault()

    if (!loading && value && value.trim()) {
      onEnter(value)
      setValue('')
    }
  }

  return (
    <div className="chat">
      <div className="chat-container">
        <div ref={messagesRef} className="messages">
          {messages.map((q, i) => {
            const previousMessage = messages[i - 1]
            const nextMessage = messages[i + 1]

            const isLastUserMessage = q.isUser && (i === messages.length - 1 || (!!nextMessage && !nextMessage.isUser))
            const isFirstAssistentMessage = !q.isUser && (i === 0 || (!!previousMessage && !!previousMessage.isUser))

            return (
              <div
                className={`message ${q.isUser ? '-user' : '-assistent'} ${isLastUserMessage || isFirstAssistentMessage ? '-avatar' : ''}`}
                key={i}
              >
                {isFirstAssistentMessage && (
                  <>
                    <p className="title">Ludilene</p>
                    <ChatIcon isUser={false} />
                  </>
                )}
                <div className="text">
                  <ChatMessageByType {...q} />
                </div>
                {isLastUserMessage && <ChatIcon isUser={true} />}
              </div>
            )
          })}
        </div>
        {loading && <div className="chat-loading">Ludilene está digitando...</div>}
      </div>

      <Form className="chat-form" onSubmit={handleSubmit}>
        <FormControl ref={inputRef} placeholder="Digite aqui..." value={value} onChange={(e) => setValue(e.target.value)} />
        <Button className="button" type="submit" bsStyle="primary">
          Enviar
        </Button>
      </Form>
    </div>
  )
}
