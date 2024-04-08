import React from "react";
import "./ChatItem.css";

export default function ChatItem({user}) {
  return (
    <div className={'chat-item ' + user}>
      <div className="chat-item__avatar">
        <img src={require("../../assets/img/profile-2.png")} alt="" />
      </div>
      <div className="chat-item__chat-content">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
          blanditiis praesentium neque atque inventore, odio numquam accusantium
          ea sit aliquid?
        </p>
      </div>
    </div>
  );
}
