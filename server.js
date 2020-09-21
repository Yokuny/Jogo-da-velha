import express from 'express'
import http from 'http'
import socketio from 'socket.io'
const app = express()
const server = http.createServer(app)
const sockets = socketio(server)
app.use(express.static('public'))
server.listen(3000, () => {
    console.log(`> server listening on port: 3000`)
})

//posso colocar funções java script aqui para servir de servidor