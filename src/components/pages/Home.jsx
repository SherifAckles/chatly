import React from 'react'
import Sidebar from "../../components/chatbox/Sidebar"
import Chat from "../../components/chatbox/Chat"


const Home = () => {
  return (
    <div className='home'>
      <div className="container">
        <Sidebar />
        <Chat/>
      </div>
    </div>
  )
}

export default Home