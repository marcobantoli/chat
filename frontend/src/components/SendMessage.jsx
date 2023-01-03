import { useState } from "react";
import Axios from "axios";

function SendMessage({ username, room, socket }) {
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setMessage(e.target.value);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message !== "") {
      // const dateCreated = new Date()
      socket.emit("send_message", { message, room });

      const token = localStorage.getItem("token");

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const data = {
        roomId: room,
        message: message,
      };

      Axios.post("http://localhost:5000/messages", data, config)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          alert(error);
          console.log(error);
        });

      setMessage("");
    }
  };

  return (
    <form id="send-message-container">
      <textarea
        id="send-message-area"
        value={message}
        placeholder="Type your message here..."
        onChange={handleChange}
      />
      <button onClick={handleSendMessage}>Send Message</button>
    </form>
  );
}

export default SendMessage;
