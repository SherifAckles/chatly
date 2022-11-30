import React from 'react'
import Navbar from "../../components/chatbox/Navbar"
import Search from "../../components/chatbox/Search"
import Chats from "../../components/chatbox/Chats"


import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Navbar />
      <Search />
      <Chats/>
      
    </div>
  )
}

export default Sidebar