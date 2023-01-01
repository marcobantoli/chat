import Messages from '../components/Messages.jsx'
import RoomInfo from '../components/RoomInfo.jsx'
import SendMessage from '../components/SendMessage.jsx'

function Chat() {
  return (
    <div id="chat-page-container">
      <RoomInfo />
      <Messages />
      <SendMessage />
    </div>
  )
}

export default Chat
