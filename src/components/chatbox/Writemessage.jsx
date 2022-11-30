import React from 'react'
import Attach from "../../assets/attach.png";
import Image from "../../assets/image.png";
import "./writemessage.css"
const Writemessage = () => {
  return (
    <div className='writemessage'>
      <input type="text" placeholder="Send a message..." />
      <div className="send">
        <img src={Attach} alt="" />
        <input type="file" style={{ display: "none" }} id="file" />
        <label htmlFor="file">
          <img src={Image} alt="" />
        </label>
        <button>Send</button>
      </div>
    </div>
  )
}

export default Writemessage