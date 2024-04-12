import React, { useContext } from "react";
import "./Feed.css";
import Stories from "../../components/Stories";
import PostList from "../../components/PostList";
import Search from "../../components/Search";
import Suggest from "../../components/Suggest";
import Bookmark from "../../components/Bookmark";
import { authContext } from "../../context/AuthContext";
import { Navigate } from 'react-router-dom'
import Sidebar from '../../components/Sidebar'
import PostBox from "../../components/PostBox";
import { homeContext } from "../../context/HomeContext";

export default function Feed() {
  const HomeContext = useContext(homeContext)
  // const Auth = useContext(authContext)
  
  // console.log(Auth.isLogin)
  
  // console.log(JSON.parse(localStorage.getItem('user')))
  return (
          <>
          <Sidebar />
            <div className="feed">
              <div className="feed-wrap">
                <div className="feed-left">
                  <Stories />
                  {
                    HomeContext.statePostBox
                    ?

                    <PostBox />
                    :
                    <></>
                  }
                  <h2>Timeline</h2>
                  <div className="timeline-list">
                    <PostList />
                  </div>
                </div>
                <div className="feed-right">
                  <Search />
                  <Suggest />
                  <Bookmark />
                </div>
              </div>
            </div>
          </>
  )
}
