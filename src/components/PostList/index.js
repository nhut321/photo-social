import React from 'react'
import './PostList.css'
import PostItem from '../PostItem'

export default function PostList() {
  return (
    <div className="post-list">
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
    </div>
  )
}
