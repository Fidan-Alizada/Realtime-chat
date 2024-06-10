
import { ref, push, serverTimestamp } from "firebase/database";
import { useState } from "react";
import { auth, db } from "../../firebase";
import "./message.css";

const SendMessage = () => {
  const [message, setMessage] = useState("");

  const sendMessage = async (event) => {
    event.preventDefault();
    if (message.trim() === "") {
      alert("Enter valid message");
      return;
    }
    const { uid, displayName, photoURL } = auth.currentUser;
    await push(ref(db, "messages"), {
      text: message,
      name: displayName,
      avatar: photoURL,
      createdAt: serverTimestamp(),
      uid,
    });
    setMessage("");
  };

  return (
    <form className="send-message-container" onSubmit={sendMessage}>
      <input
        type="text"
        placeholder="Type your message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="message-input"
      />
      <button className="send-button">Send Message</button>
    </form>
  );
};

export default SendMessage;
