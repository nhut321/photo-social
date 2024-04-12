import React, { useContext, useEffect, useState } from "react";
import "./Stories.css";
import { authContext } from "../../context/AuthContext";
import { baseURL } from "../../baseURL";
import axios from 'axios'
import { homeContext } from "../../context/HomeContext";

export default function Stories() {
  const HomeContext = useContext(homeContext)
  const getFriendStories = JSON.parse(localStorage.getItem('user') || [])
  const [friendId, setFriendId] = useState(getFriendStories.following)
  const [friends, setFriends] = useState([])
  useEffect(() => {
    
   const fetchData = async () => {
      try {
        await axios.get(baseURL + '/user/' + getFriendStories._id)
          .then(data => {
            setFriends(data.data.friends)
          })
      } catch (err) {
        console.log(err)
      } 
   }

   fetchData()

  },[friendId])

  // friends.following.map(v => console.log(v))

  // console.log(friends)


  return (
    <div className="stories">
      <div className="stories-list">
        <div className="stories-item" onClick={HomeContext.openPostBox}>
          <div className="mask">
            <i className="fa-solid fa-plus"></i>
          </div>
          <div className="stories-item__img">
            <img src={require("../../assets/img/profile-1.jpg")} alt="" />
          </div>
          <div className="stories-item__name">
            <p>Upload</p>
          </div>
        </div>
        {
          friends.map((v,i) => {
              return (

                <div className="stories-item seen">
                  <div className={"stories-item__img"}>
                    <img
                      src={
                        v.avatar !== ""
                          ? v.avatar
                          : require("../../assets/img/profile-2.png")
                        // require("../../assets/img/profile-2.png")
                      }
                      alt=""
                    />
                  </div>
                  <div className="stories-item__name">
                    <p>{v.lname}</p>
                  </div>
                </div>
              )
            })
        }
      </div>
    </div>
  );
}
