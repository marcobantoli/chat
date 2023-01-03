import Messages from "../components/Messages.jsx";
import RoomInfo from "../components/RoomInfo.jsx";
import SendMessage from "../components/SendMessage.jsx";

function Chat({ username, room, socket }) {
  return (
    <div id="chat-page-container">
      <RoomInfo username={username} room={room} socket={socket} />
      <Messages room={room} socket={socket} />
      <SendMessage username={username} room={room} socket={socket} />
    </div>
  );
}

export default Chat;
