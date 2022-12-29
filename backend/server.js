const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 5000
const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)
const { Server } = require('socket.io')
const io = new Server(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('a user connected')

  
})

server.listen(PORT, () => console.log(`Server started on port ${PORT}`))
