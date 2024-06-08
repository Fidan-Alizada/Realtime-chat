import React from 'react';
import '../home.css';

const Chat = () => {
  return (
    <div className="chatroom-container">
      <div className="messages">
        <p>Hello</p>
      </div>
      <div className="input-container">
        <input
          className="input"
          type="text"
          placeholder="Type your message..."
        />
        <button>Send</button>
      </div>
      <button className="sign-out">Sign Out</button>
    </div>
  );
};

export default Chat;
