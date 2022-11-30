import React from "react";
import Messages from "./Messages";
import "./chat.css";

const Chat = () => {
  return (
    <div className="chat">
      <div className="chatinfo">
        {/* username */}
        <span>sara</span>
      </div>
      <Messages />
    </div>
  );
};

export default Chat;
