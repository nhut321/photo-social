import React from "react";
import "./ChatInput.css";

export default function ChatInput() {
  return (
    <div className="chat-input">
      <input type="text" placeholder="Send a message..." />
      <div className="chat-input__emoji">
        <i className="fa-regular fa-face-smile"></i>
      </div>
    </div>
  );
}
