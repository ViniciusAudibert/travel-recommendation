import './style.scss'
import React, { useState } from 'react'

import { Badge, ListGroup, ListGroupItem } from 'react-bootstrap'

export const Planejamentos = ({ planejamentos }) => {
  const [collapseLugares, setCollapseLugares] = useState({})

  return (
    <div className="planejamento-container">
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">Seus Planejamentos:</h3>
        </div>
        <div className="panel-body">
          <ListGroup>
            {planejamentos.length ? (
              planejamentos.map((planejamento) => {
                const { _id, nome, lugares } = planejamento

                return (
                  <>
                    <ListGroupItem
                      bsStyle="info"
                      active={!!collapseLugares[_id]}
                      onClick={() =>
                        setCollapseLugares((e) => {
                          e[_id] = !e[_id]
                          return { ...e }
                        })
                      }
                    >
                      <Badge>{lugares.length}</Badge>
                      {nome}
                    </ListGroupItem>

                    {collapseLugares[_id] && (
                      <ListGroup className="planejamentos-lugares">
                        {lugares.map((lugar) => {
                          return (
                            <a className="list-group-item" href={lugar.googleUrl} target="_">
                              {lugar.nome}
                            </a>
                          )
                        })}
                      </ListGroup>
                    )}
                  </>
                )
              })
            ) : (
              <p>Nenhum lugar salvo</p>
            )}
          </ListGroup>
        </div>
      </div>
    </div>
  )
}
