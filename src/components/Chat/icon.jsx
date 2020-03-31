import React from 'react'

const AVATAR = {
  USER: '/img/avatar.png',
  ASSISTENT: '/img/ludilene.png',
}

export const ChatIcon = props => {
  return (
    <figure className={`chat-icon ${props.isUser ? '-user' : '-assistent'}`}>
      <img src={props.isUser ? AVATAR.USER : AVATAR.ASSISTENT} />
    </figure>
  )
}
