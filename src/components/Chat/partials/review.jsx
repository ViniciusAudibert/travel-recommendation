import React from 'react'

export const ChatReview = (props) => {
  return (
    <div className="chat-type-review">
      Tenho alguns comentários de amigos sobre o local
      {props.message.slice(0, 2).map(({ mensagem, estrelas, descricaoDataReview }) => (
        <div className="review">
          <p className="review-message">{mensagem}</p>
          <div className="info">
            <p className="stars">
              Avaliação <strong>{estrelas} de 5</strong>
            </p>
            <p className="time">{descricaoDataReview}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
