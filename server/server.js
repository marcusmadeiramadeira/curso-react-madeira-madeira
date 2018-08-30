const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('data.json')
const rewriter = require('./routes.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)
server.use(jsonServer.rewriter(rewriter))
server.listen(3001, () => {
  console.log('JSON Server is running...')
  console.log('Curso de React Js para colaboradores da Madeira Madeira')
})
