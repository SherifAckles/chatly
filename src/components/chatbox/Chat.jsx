import React from "react";
import Messages from "./Messages";
import Writemessage from "./Writemessage"
import "./chat.css";

const Chat = () => {
  return (
    <div className="chat">
      <div className="chatinfo">
        {/* username */}
        <span>sara</span>
      </div>
      <Messages />
      <Writemessage/>
    </div>
  );
};

export default Chat;
