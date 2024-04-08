import React from "react";
import "./Feed.css";
import Stories from "../../components/Stories";
import PostList from "../../components/PostList";
import Search from "../../components/Search";
import Suggest from "../../components/Suggest";
import Bookmark from "../../components/Bookmark";

export default function Feed() {
  return (
    <div className="feed">
      <div className="feed-wrap">
        <div className="feed-left">
          <Stories />
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
  );
}
