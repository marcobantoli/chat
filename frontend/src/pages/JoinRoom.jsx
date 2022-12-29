function JoinRoom() {
  return (
    <div id="join-room-container">
      <label id="select-label" for="rooms">Select a room:</label>
      <select id="dropdown" name="rooms">
        <option>JavaScript</option>
        <option>Python</option>
        <option>C</option>
      </select>
      <button id="join-room-button">Join Room</button>
    </div>
  )
}

export default JoinRoom
