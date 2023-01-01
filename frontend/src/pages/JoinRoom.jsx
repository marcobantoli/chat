import { useNavigate } from 'react-router-dom'

function JoinRoom({ username, room, setRoom, socket }) {
  const navigate = useNavigate()

  const joinRoom = () => {
    if (room !== '' && username != '') {
      socket.emit('join_room', { username, room })
    }

    navigate('/chat')
  }

  return (
    <div id="join-room-container">
      <label id="select-label" for="rooms">Select a room:</label>
      <select id="dropdown" name="rooms" onChange={(e) => setRoom(e.target.value)}>
        <option value="javascript">JavaScript</option>
        <option value="python">Python</option>
        <option value="C">C</option>
      </select>
      <button id="join-room-button" onClick={joinRoom}>Join Room</button>
    </div>
  )
}

export default JoinRoom
