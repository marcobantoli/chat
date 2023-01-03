import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

function RoomInfo({ username, room, socket }) {
  const [users, setUsers] = useState([]);
  const [roomName, setRoomName] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    Axios.get("http://localhost:5000/rooms")
      .then(function (response) {
        setRoomName(response.data[room - 1].room_name);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    socket.on("user_joined", (data) => {
      console.log(data);
      setUsers(data);
    });

    socket.on("user_left", (data) => {
      console.log(data);
      setUsers(data);
    });

    return () => {
      socket.off("user_joined");
      socket.off("user_left");
    };
  }, [socket]);

  const handleLeaveRoom = () => {
    // emit a leave_room here
    socket.emit("leave_room", room);

    navigate("/join-room");
  };

  return (
    <div id="room-info-container">
      <div id="room-name">{roomName}</div>
      <div>
        Users:
        <ul>
          {users.map((user, i) => (
            <li key={i}>{user.username}</li>
          ))}
        </ul>
      </div>
      <button id="leave-room-button" onClick={handleLeaveRoom}>
        Leave Room
      </button>
    </div>
  );
}

export default RoomInfo;
