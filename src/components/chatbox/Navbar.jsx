import React from 'react'
import User1 from "../../assets/pngegg (1).png"
import "./navbar.css"

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <span className='logo-navbar'>Chatly</span>
      <div className="user">
        <img className='user-avatar' src={User1} alt="" />
        <span>john</span>
        <button type="button" class="btn btn-secondary btn-sm">logout</button>
      </div>

    </div>
  )
}

export default Navbar