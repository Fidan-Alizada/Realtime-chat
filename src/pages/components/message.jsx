import React from "react";
import "./message.css";
const Message = ({ message }) => {
  return (
    <div className="message-container">
      <p className="message-name">{message.name}</p>
      <p className="message-text">{message.text}</p>
    </div>
  );
};

export default Message;
