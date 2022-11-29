import React from 'react'
import "./navbar.css"

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo-navbar'>Chatly</span>
      <div className="user">
        <img src="" alt="" />
        <span>Sheriff</span>
        <button>logout</button>
      </div>

    </div>
  )
}

export default Navbar