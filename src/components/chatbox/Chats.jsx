import React from "react";
import "./chats.css";
import User3 from "../../assets/pngegg (3).png";
const Chats = () => {
  return (
    <div className="chats">
      <div className="userchat">
        <img src={User3} alt="user2" />
        <div className="userchat-info">
          <span>Jensen</span>
          <p>Hello</p>
        </div>
      </div>
      {/* user chat 3 */}
      <div className="userchat">
        <img src={User3} alt="user2" />
        <div className="userchat-info">
          <span>Jensen</span>
          <p>Hello</p>
        </div>
      </div>
      {/* user chat 4 */}
      <div className="userchat">
        <img src={User3} alt="user2" />
        <div className="userchat-info">
          <span>Jensen</span>
          <p>Hello</p>
        </div>
      </div>
    </div>
    
  );
};

export default Chats;
