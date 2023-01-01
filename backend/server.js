const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 5000

const cors = require('cors')
const { Server } = require('socket.io')

const express = require('express')
const app = express()
const http = require('http')

app.use(cors())
const server = http.createServer(app)

const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST']
  }
})

let chatRoom = ''
let allUsers = []

io.on('connection', (socket) => {
  console.log(`user ${socket.id} has connected`)

  socket.on('join_room', (data) => {
    const { username, room } = data
    socket.join(room)

    let createdTime = Date.now()

    socket.to(room).emit('receive_message', {
      message: '${username} has joined the room',
      username,
      createdTime
    })

    socket.emit('receive_message', {
      message: `Welcome ${username}`,
      username,
      createdTime
    })

    chatRoom = room;
    allUsers.push({ id: socket.id, username, room });
    chatRoomUsers = allUsers.filter((user) => user.room === room);
    socket.to(room).emit('chatroom_users', chatRoomUsers);
    socket.emit('chatroom_users', chatRoomUsers);
  })
})

server.listen(PORT, () => console.log(`Server started on port ${PORT}`))
