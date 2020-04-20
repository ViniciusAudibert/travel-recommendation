import React from 'react'

export const ChatGoogleLink = (props) => {
  return (
    <a href={props.link} target="_blank">
      {props.message ? `O endereço do local é ${props.message}` : 'Clique aqui para ver no google maps'}
    </a>
  )
}
