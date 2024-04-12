import React from "react";
import "./PostItem.css"

export default function PostItem({
  img,
  userPost,
  like
}) {
  return (
    <div className="post-item">
      <div className="post-item__img">
        <img src={img !== '' ? img : require("../../assets/img/feed-6.jpg")} alt="" />
      </div>
      <div className="post-item__info">
        <div className="post-item__info-user">
          <div className="info-user__img">
            <img src={userPost.avatar !== '' ? userPost.avatar :require("../../assets/img/profile-1.jpg")} alt="" />
          </div>
          <div className="info-user__name">
            <p>{userPost.fname + ' ' + userPost.lname}</p>
          </div>
        </div>
        <div className="post-item__info-reaction">
          <div className="info-reaction__heart">
            <i className="fa-regular fa-heart"></i>
            <p>{like.length}</p>
          </div>
          <div className="info-reaction__comment">
          <i className="fa-regular fa-comment"></i>
          <p>25</p>
          </div>
        </div>
      </div>
    </div>
  );
}
