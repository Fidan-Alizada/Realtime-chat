import React, { useEffect, useState } from "react";
import Message from "./message";
import { collection, limit, onSnapshot, orderBy, query } from "firebase/firestore";
import SendMessage from "./send-message";
import { db } from '../../firebase';
import { Link } from "react-router-dom";
import "./message.css"
const Chat = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const messagesQuery = query(
      collection(db, "messages"),
      orderBy("createdAt", "desc"),
      limit(20)
    );

    const unsubscribe = onSnapshot(messagesQuery, (QuerySnapshot) => {
      const fetchedMessages = [];
      QuerySnapshot.forEach((doc) => {
        fetchedMessages.push({ ...doc.data(), id: doc.id });
      });
      const sortedMessages = fetchedMessages.sort(
        (a, b) => a.createdAt - b.createdAt
      );
      setMessages(sortedMessages);
    });
    return () => unsubscribe;
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