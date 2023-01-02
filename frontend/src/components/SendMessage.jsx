import { useState } from 'react'

function SendMessage({ username, room, socket }) {
  const [message, setMessage] = useState('')

  const handleChange = (e) => {
    e.preventDefault()
    setMessage(e.target.value)
  }

  const handleSendMessage = (e) => {
    e.preventDefault()
    if (message !== '') {
      // emit here
      // const dateCreated = new Date()
      socket.emit('send_message', { message, room })
      setMessage('')
    }
  }

  return (
    <form id="send-message-container">
      <textarea id="send-message-area" value={message} placeholder="Type your message here..." onChange={handleChange} />
      <button onClick={handleSendMessage}>Send Message</button>
    </form>
  )
}

export default SendMessage
