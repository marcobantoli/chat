import { useNavigate } from "react-router-dom";

function JoinRoom({ username, room, setRoom, socket }) {
  const navigate = useNavigate();

  const joinRoom = () => {
    if (room !== "" && username != "") {
      socket.emit("join_room", { username: username.username, room });
    }

    navigate("/chat");
  };

  return (
    <div id="join-room-container">
      <label id="select-label" htmlFor="rooms">
        Select a room:
      </label>
      <select
        id="dropdown"
        name="rooms"
        onChange={(e) => setRoom(parseInt(e.target.value))}
      >
        <option value="1">JavaScript</option>
        <option value="2">Python</option>
        <option value="3">C</option>
      </select>
      <button id="join-room-button" onClick={joinRoom}>
        Join Room
      </button>
    </div>
  );
}

export default JoinRoom;
