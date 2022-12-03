import React, { useContext } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { AuthContext } from "../../context/AuthContext";
import "./navbar.css";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="navbar-container">
      <span className="logo-navbar">Chatly</span>
      <div className="user">
        <img className="user-avatar" src={currentUser.photoURL} alt="" />
        <span>{currentUser.email}</span>
        <button
          type="button"
          className="btn btn-secondary btn-sm"
          onClick={() => signOut(auth)}
        >
          logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
