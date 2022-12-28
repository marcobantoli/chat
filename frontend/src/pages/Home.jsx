import ChatBox from '../components/ChatBox.jsx'
import MyChats from '../components/MyChats.jsx'

function Home() {
  return (
    <>
      <div className="site-name">
        Pamda
      </div>
      <div id="wrapper">
        <MyChats />
        <ChatBox />
      </div>
    </>
  )
}

export default Home
