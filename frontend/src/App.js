import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { io } from "socket.io-client";
import Axios from "axios";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import JoinRoom from "./pages/JoinRoom.jsx";
import Chat from "./pages/Chat.jsx";

const socket = io("http://localhost:5000");

function App() {
  const [username, setUsername] = useState({});
  const [room, setRoom] = useState(1);

  const navigate = useNavigate();

  const handleLogin = async (email, password) => {
    Axios.post("http://localhost:5000/users/login", {
      email: email,
      password: password,
    })
      .then(function (response) {
        const accessToken = response.data.accessToken;
        localStorage.setItem("token", accessToken);

        setUsername({
          username: email,
        });

        navigate("/join-room");
      })
      .catch(function (error) {
        console.log(error);
        alert(error.message);
      });
  };

  const handleRegister = async (username, email, password) => {
    Axios.post("http://localhost:5000/users", {
      username: username,
      email: email,
      password: password,
    })
      .then(function (response) {
        const accessToken = response.data.token;
        localStorage.setItem("token", accessToken);

        setUsername({
          username: username,
        });

        navigate("/");
      })
      .catch(function (error) {
        console.log(error);
        alert(error.message);
      });
  };

  return (
    <Routes>
      <Route path="/" element={<Login handleLogin={handleLogin} />} />
      <Route
        path="/register"
        element={<Register handleRegister={handleRegister} />}
      />
      <Route
        path="/join-room"
        element={
          <JoinRoom
            username={username}
            room={room}
            setRoom={setRoom}
            socket={socket}
          />
        }
      />
      <Route
        path="/chat"
        element={<Chat username={username} room={room} socket={socket} />}
      />
    </Routes>
  );
}

// for now last route is /chat (maybe should have separate urls for chatrooms)

export default App;
