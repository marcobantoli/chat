import { useState, useEffect } from "react";
import Axios from "axios";

function Messages({ room, socket }) {
  const [messages, setMessages] = useState([]);

  // useEffect here to fetch the messages from the database
  useEffect(() => {
    Axios.get("http://localhost:5000/messages")
      .then(function (response) {
        const messagesData = response.data;
        const filtered = messagesData.filter((msg) => msg.room_id === room);
        setMessages(filtered);
      })
      .catch(function (err) {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessages((prevState) => [...prevState, { message: data }]);
    });

    return () => {
      socket.off("receive_message");
    };
  }, [socket]);

  return (
    <div id="messages-list-container">
      {messages.map((msg, i) => (
        <div className="message-container" key={i}>
          {msg.message}
        </div>
      ))}
    </div>
  );
}

export default Messages;
