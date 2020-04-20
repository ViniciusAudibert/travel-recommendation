import React from 'react'

export const ChatTitle = (props) => {
  return (
    <span className="chat-type-title">
      Conhece <strong className="highlight">{props.message}?</strong>
    </span>
  )
}
