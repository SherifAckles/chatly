import React from 'react'
import User1 from "../../assets/pngegg (1).png"
import "./message.css";

const message = () => {
  return (
    <div className='message owner'>
      <div className="message-info">
        <img src={User1} alt="" />
        <span>just now</span>
      </div>
        <div className="messageContent">
          <p>hello</p>
           <img src={User1} alt="" /> 
        </div>
    </div>
  )
}

export default message