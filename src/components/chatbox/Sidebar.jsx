import React from 'react'
import Navbar from "../../components/chatbox/Navbar"
import Search from "../../components/chatbox/Search"


import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Navbar />
      <Search/>
    </div>
  )
}

export default Sidebar