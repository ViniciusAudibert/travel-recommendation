const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.get('/api/messages/welcome', (req, res) =>
    res.json({
      messages: [
        {
          id: 'welcome-1',
          message: 'Olá, meu nome é Ludilene',
          isUser: false,
        },
        {
          id: 'welcome-2',
          message: 'Está querendo visitar algum lugar? Me diga onde e eu irei te auxiliar, posso te ajudar no planejamento de sua viajem!',
          isUser: false,
        },
      ],
    })
  )

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
