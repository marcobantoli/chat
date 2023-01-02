import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function RoomInfo({ username, room, socket }) {
  const [users, setUsers] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    // watch socket emits from server to see if a user has joined
  }, [socket])

  const handleLeaveRoom = () => {
    // emit a leave_room here
    socket.emit('leave_room', {
      username,
      room
    })

    navigate('/join-room')
  }

  return (
    <div id="room-info-container">
      <div id="room-name">
        Room Name
      </div>
      <div>
        Users:
        <ul>
          {users.map(user => <li>user</li>)}
        </ul>
      </div>
      <button id="leave-room-button" onClick={handleLeaveRoom}>Leave Room</button>
    </div>
  )
}

export default RoomInfo
