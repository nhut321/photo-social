import React, { useState } from 'react'
import './Message.css'
import ChatList from '../../components/ChatList'
import ChatInput from '../../components/ChatInput'

export default function Message() {
  const [chatActive, setChatActive] = useState(0)
  const selectChatFn = (v) => {
    setChatActive(v)
  }
  return (
    <div className="message">
      <div className="message-left">
        <div className="message-left__header">
          <h3>Message</h3>
        </div>
        <div className="message-left__list">
          <div className="message-left__item" onClick={() => selectChatFn(1)}>
            <div className="message-left__item-avatar">
              <img src={require('../../assets/img/profile-2.png')} alt="" />
            </div>
            <div className="message-left__item-info">
              <p>Dana Scully 1</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, sint!</p>
            </div>
            <div className="message-left__item-time">
              <p>12:40 PM</p>
            </div>
          </div>
          <div className="message-left__item" onClick={() => selectChatFn(2)}>
            <div className="message-left__item-avatar offline">
              <img src={require('../../assets/img/profile-2.png')} alt="" />
            </div>
            <div className="message-left__item-info">
              <p>Dana Scully 2</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, sint!</p>
            </div>
            <div className="message-left__item-time">
              <p>12:40 PM</p>
            </div>
          </div>
        </div>
      </div>
      <div className="message-right">
        {
          chatActive == 0
          ?
          <></>
          :
          <>
        <div className="message-right__header">
          <div className="message-right__header-avatar">
            <img src={require('../../assets/img/profile-2.png')} alt="" />
          </div>
          <div className="message-right__header-info">
            <p>Dana Scully</p>
            <p>@_dana.scully</p>
          </div>
        </div>
        <div className="message-right__content">
          <ChatList />
          <ChatInput />
        </div>
          </>
        }
      </div>
    </div>
  )
}
