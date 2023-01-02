import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function RoomInfo({ username, room, socket }) {
  const [users, setUsers] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    socket.on('join_room', data => {
      setUsers(prevState => [...prevState, { name: data.username }])
    })

    return () => {
      socket.off('join_room')
    }
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
          {users.map(user => <li>{user.name}</li>)}
        </ul>
      </div>
      <button id="leave-room-button" onClick={handleLeaveRoom}>Leave Room</button>
    </div>
  )
}

export default RoomInfo
