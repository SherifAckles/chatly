import React from 'react'
import Sidebar from "../../components/chatbox/Sidebar"
import Chat from "../../components/chatbox/Chat"
import "./home.css"


const Home = () => {
  return (
    <div className='home'>
      <div className="container-home">
        <Sidebar />
        <Chat/>
      </div>
    </div>
  )
}

export default Home