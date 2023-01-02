const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 5000

const cors = require('cors')
const { Server } = require('socket.io')
const express = require('express')
const app = express()
const http = require('http')

// const messages = require('./routes/messageRoutes.js');
const users = require('./routes/userRoutes.js');

app.use(cors())
app.use(express.json())

app.use('/users', users)
// app.use('/messages', messages)

const server = http.createServer(app)

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
})

let chatRooms = []

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`)

  socket.on("join_room", (data) => {
    socket.join(data.room)
  })

  socket.on("send_message", (data) => {
    const { message, room } = data
    io.in(room).emit("receive_message", message)
  })
})

server.listen(PORT, () => console.log(`Server started on port ${PORT}`))
