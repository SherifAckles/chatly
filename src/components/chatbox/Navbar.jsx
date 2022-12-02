import React, { useContext } from 'react'
import {signOut} from "firebase/auth"
import { auth } from '../../firebase'
import { AuthContext } from '../../context/AuthContext'
import "./navbar.css"

const Navbar = () => {
  const {currentUser} = useContext(AuthContext)
  return (
    <div className='navbar-container'>
      <span className='logo-navbar'>Chatly</span>
      <div className="user">
        <img className='user-avatar' src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
        <button type="button" class="btn btn-secondary btn-sm" onClick={()=>signOut(auth)}>logout</button>
      </div>

    </div>
  )
}

export default Navbar