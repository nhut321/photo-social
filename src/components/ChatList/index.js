import React from 'react'
import './ChatList.css'
import ChatItem from '../ChatItem'

export default function ChatList() {
  return (
    <div className="chat-list">
        <ChatItem user='me'/>
        <ChatItem />
        <ChatItem />
        <ChatItem user='me'/>
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
    </div>
  )
}
