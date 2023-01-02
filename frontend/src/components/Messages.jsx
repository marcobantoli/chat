import { useState, useEffect } from 'react'

function Messages({ socket }) {
  const [messages, setMessages] = useState([])

  // useEffect here to fetch the messages from the database
  useEffect(() => {
    socket.on('receive_message', data => {
      setMessages(prevState => [...prevState, { message: data }])
    })

    return () => {
      socket.off('receive_message')
    }
  }, [socket])

  return (
    <div id="messages-list-container">
      {messages.map((msg, i) => <div className="message-container" key={i}>{msg.message}</div>)}
    </div>
  )
}

export default Messages
