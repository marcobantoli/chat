import { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { io } from "socket.io-client"
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import JoinRoom from './pages/JoinRoom.jsx'
import Chat from './pages/Chat.jsx'

const socket = io('http://localhost:5000')

function App() {
  const [username, setUsername] = useState({})
  const [room, setRoom] = useState({})

  const navigate = useNavigate()

  const handleLogin = (email) => {
    setUsername(email)      // set it to email for now
    navigate('/join-room')
  }

  return (
    <Routes>
      <Route path='/' element={<Login handleLogin={handleLogin} />} />
      <Route path='/register' element={<Register />} />
      <Route path="/join-room" element={<JoinRoom username={username} room={room} setRoom={setRoom} socket={socket} />} />
      <Route path="/chat" element={<Chat />} />
    </Routes>
  )
}

// for now last route is /chat

export default App
