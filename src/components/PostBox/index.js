import React, { useContext, useRef } from 'react'
import './PostBox.css'
import { homeContext } from '../../context/HomeContext'

export default function PostBox() {
  const HomeContext = useContext(homeContext)
  const uploadRef = useRef()
  // console.log('true roi ne')
   return <div className="post-box">
        <div className="post-box__header"> 
          <h1>Create post</h1>
          <i className="fa-regular fa-circle-xmark" onClick={HomeContext.closePostBox}></i>
        </div>
        <div className="post-box__content">
          <div className="post-box__content-user">
            <div className="content-user__avatar">
              <img className='w-100 h-100' src={require('../../assets/img/profile-2.png')} alt="" />
            </div>
            <div className="content-user__info">
              <p>Dana Scully</p>
            </div>
          </div>
          <div className="post-box__content-form">
            <textarea className='content-form__textarea' name="postInput" id="" cols="" rows="" placeholder="What's on your mind, Nhựt?"></textarea>
          </div>
          <div className="upload-img">
            <input ref={uploadRef} type="file" />
            <button className="btn">Upload</button>
          </div>
        </div>
    </div>
}
