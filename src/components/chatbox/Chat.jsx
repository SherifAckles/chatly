import React, { useContext } from "react";
import { ChatContext } from "../../context/ChatContext";
import Messages from "./Messages";
import Writemessage from "./Writemessage"
import "./chat.css";

const Chat = () => {
  const { data } = useContext(ChatContext);
  return (
    <div className="chat">
      <div className="chatinfo">
        {/* username */}
        <span>{data.user?.email}</span>
      </div>
      <Messages />
      <Writemessage/>
    </div>
  );
};

export default Chat;
