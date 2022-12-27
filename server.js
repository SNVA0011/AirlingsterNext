const cacheableResponse = require('cacheable-response')
const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV === 'production'
const app = next({ dev })

const handle = app.getRequestHandler()

const ssrCache = cacheableResponse({
  ttl: 1000 * 60 * 60, // 1hour
  get: async ({ req, res }) => {
    const rawResEnd = res.end
    const data = await new Promise((resolve) => {
      res.end = (payload) => {
        resolve(res.statusCode === 200 && payload)
      }
      app.render(req, res, req.path, {
        ...req.query,
        ...req.params,
      })
    })
    res.end = rawResEnd
    return { data }
  },
  send: ({ data, res }) => res.send(data),
})

app.prepare().then(() => {
  const server = express()

  server.get('/', (req, res) => ssrCache({ req, res }))

  server.get('/blog', (req, res) => ssrCache({ req, res }))
  server.get('/blog/:blogDetail', (req, res) => ssrCache({ req, res }))
  server.get('/flights', (req, res) => ssrCache({ req, res }))
  server.get('/flights/:Airline', (req, res) => ssrCache({ req, res }))

  server.get('/es/vuelos', (req, res) => ssrCache({ req, res }))
  server.get('/es/vuelos/:Airline', (req, res) => ssrCache({ req, res }))
  server.get('/es/articulos', (req, res) => ssrCache({ req, res }))
  server.get('/es/articulos/:blogDetail', (req, res) => ssrCache({ req, res }))

  server.get('*', (req, res) => handle(req, res))

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
