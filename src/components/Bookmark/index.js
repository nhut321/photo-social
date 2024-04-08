import React from "react";
import "./Bookmark.css";

export default function Bookmark() {
  return (
    <div className="bookmark">
      <div className="bookmark-header">
        <h3>Saved</h3>
        <a href="#123">See all</a>
      </div>
      <div className="bookmark-content">
        <img src={require('../../assets/img/feed-3.jpg')} alt="" />
        <img src={require('../../assets/img/feed-3.jpg')} alt="" />
        <img src={require('../../assets/img/feed-3.jpg')} alt="" />
        <img src={require('../../assets/img/feed-3.jpg')} alt="" />
      </div>
    </div>
  );
}
