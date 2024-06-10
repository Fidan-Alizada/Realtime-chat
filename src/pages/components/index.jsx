// chat.jsx
import React, { useEffect, useState } from "react";
import Message from "./message";
import { ref, onValue, query, orderByChild, limitToLast } from "firebase/database";
import SendMessage from "./send-message";
import { db } from "../../firebase";
import { Link } from "react-router-dom";
import "./message.css";

const Chat = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const messagesQuery = query(
      ref(db, "messages"),
      orderByChild("createdAt"),
      limitToLast(20)
    );

    const unsubscribe = onValue(messagesQuery, (snapshot) => {
      const fetchedMessages = [];
      snapshot.forEach((childSnapshot) => {
        fetchedMessages.push({ ...childSnapshot.val(), id: childSnapshot.key });
      });
      const sortedMessages = fetchedMessages.sort(
        (a, b) => a.createdAt - b.createdAt
      );
      setMessages(sortedMessages);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="chatroom-container">
      <div className="messages">
        {messages.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </div>
      <div className="input-container">
        <SendMessage />
      </div>
      <Link to="/login">
        <button className="sign-out">Sign Out</button>
      </Link>
    </div>
  );
};

export default Chat;
