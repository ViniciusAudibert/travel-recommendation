import React from 'react'
import { Carousel } from 'react-responsive-carousel'

export const ChatImages = (props) => {
  return (
    <div className="chat-type-images">
      <span className="text">Veja algumas imagens:</span>

      <div className="images">
        <Carousel>
          {props.message.map((image, i) => (
            <div>
              <img className="image" src={image} key={i} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  )
}
