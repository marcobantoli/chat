import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import JoinRoom from './pages/JoinRoom.jsx'
import Chat from './pages/Chat.jsx'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path="/join-room" element={<JoinRoom />} />
      <Route path="/chat" element={<Chat />} />
    </Routes>
  )
}

// for now last route is /chat

export default App
