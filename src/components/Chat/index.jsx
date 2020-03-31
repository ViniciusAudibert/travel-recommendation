import './style.scss'
import React, { useState, useEffect, useRef } from 'react'
import { Form, Button, FormControl } from 'react-bootstrap'
import { ChatIcon } from './icon'

export const Chat = props => {
  const { onEnter, messages } = props
  const [value, setValue] = useState('')
  const messagesRef = useRef(null)

  useEffect(() => {
    messagesRef.current.scrollTo(0, messagesRef.current.scrollHeight)
  }, [messages.length])

  function handleSubmit(e) {
    e.preventDefault()

    if (value && value.trim()) onEnter(value)
    setValue('')
  }

  return (
    <div className="chat">
      <div ref={messagesRef} className="messages">
        {messages.map((q, i) => {
          const previousMessage = messages[i - 1]
          const nextMessage = messages[i + 1]

          const isLastUserMessage = q.isUser && (i === messages.length - 1 || (!!nextMessage && !nextMessage.isUser))
          const isFirstAssistentMessage = !q.isUser && (i === 0 || (!!previousMessage && !!previousMessage.isUser))

          return (
            <div
              className={`message ${q.isUser ? '-user' : '-assistent'} ${isLastUserMessage || isFirstAssistentMessage ? '-avatar' : ''}`}
              key={q.id}
            >
              {isFirstAssistentMessage && (
                <>
                  <p className="title">Ludilene</p>
                  <ChatIcon isUser={false} />
                </>
              )}
              <p className="text">{q.message}</p>
              {isLastUserMessage && <ChatIcon isUser={true} />}
            </div>
          )
        })}
      </div>

      <Form className="form" onSubmit={handleSubmit}>
        <FormControl placeholder="Digite aqui..." value={value} onChange={e => setValue(e.target.value)} />
        <Button className="button" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
}
