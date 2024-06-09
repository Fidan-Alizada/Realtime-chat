import React from 'react';
import '../home.css';
import { Link } from 'react-router-dom';

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
      <Link to="/login">
      <button className="sign-out">Sign Out</button>
      </Link>
    </div>
  );
};

export default Chat;
