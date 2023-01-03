const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 5000;

const cors = require("cors");
const { Server } = require("socket.io");
const express = require("express");
const app = express();
const http = require("http");

const users = require("./routes/userRoutes.js");
const rooms = require("./routes/roomRoutes.js");
const messages = require("./routes/messageRoutes.js");

app.use(cors());
app.use(express.json());

app.use("/users", users);
app.use("/rooms", rooms);
app.use("/messages", messages);

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

let usersInARoom = [];

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data.room);

    usersInARoom.push({
      id: socket.id,
      username: data.username,
      room: data.room,
    });

    const usersInRoom = usersInARoom.filter((user) => user.room === data.room);
    console.log(usersInRoom);

    io.in(data.room).emit("user_joined", usersInRoom);
  });

  socket.on("send_message", (data) => {
    const { message, room } = data;
    io.in(room).emit("receive_message", message);
  });

  socket.on("leave_room", (data) => {
    socket.leave(data);

    usersInARoom = usersInARoom.filter((user) => user.id !== socket.id);

    io.in(data).emit("user_left", usersInARoom);
  });
});

server.listen(PORT, () => console.log(`Server started on port ${PORT}`));
