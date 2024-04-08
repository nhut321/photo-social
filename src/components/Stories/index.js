import React from "react";
import "./Stories.css";

export default function Stories() {
  return (
    <div className="stories">
      <div className="stories-list">
        <div className="stories-item">
          <div className="mask">
            <i className="fa-solid fa-plus"></i>
          </div>
          <div className="stories-item__img">
            <img src={require("../../assets/img/profile-1.jpg")} alt="" />
          </div>
          <div className="stories-item__name">
            <p>You</p>
          </div>
        </div>
        <div className="stories-item seen">
          <div className="stories-item__img">
            <img src={require("../../assets/img/profile-1.jpg")} alt="" />
          </div>
          <div className="stories-item__name">
            <p>You</p>
          </div>
        </div>
        <div className="stories-item">
          <div className="stories-item__img">
            <img src={require("../../assets/img/profile-1.jpg")} alt="" />
          </div>
          <div className="stories-item__name">
            <p>You</p>
          </div>
        </div>
        <div className="stories-item">
          <div className="stories-item__img">
            <img src={require("../../assets/img/profile-1.jpg")} alt="" />
          </div>
          <div className="stories-item__name">
            <p>You</p>
          </div>
        </div>
      </div>
    </div>
  );
}
