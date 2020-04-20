import React from 'react'

export const ChatImages = (props) => {
  return (
    <div className="chat-type-images">
      <span className="text">Veja algumas imagens:</span>

      <div className="images">
        {props.message.map((image, i) => (
          <img className="image" src={image} key={i} />
        ))}
      </div>
    </div>
  )
}
