import React from "react";
import "./message.css";

const Message = ({ message, isCurrentUser }) => {
 
  const messageClass = isCurrentUser ? "message-container right" : "message-container left";

  return (
    <div className={messageClass}>
      <p className="message-name">{message.name}</p>
      <p className="message-text">{message.text}</p>
    </div>
  );
};

export default Message;
