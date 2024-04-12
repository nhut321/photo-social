import React, { useEffect, useState } from 'react'
import './PostList.css'
import PostItem from '../PostItem'
import axios from 'axios'
import { baseURL } from '../../baseURL'

export default function PostList() {
  // const user = JSON.parse(localStorage.getItem('user') || [])
  const [postItem, setPostItem] = useState([])
  // console.log(user)
  const token = localStorage.getItem('token')

  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios.get(baseURL + '/posts', {
          headers: {"Authorization": "Bearer " + token}
        })
          .then(data => {
            setPostItem(data.data.data)
          })
      } catch (err) {
        console.log('loi server')
      }
    }
    fetchData()
  },[])

  return (
    <div className="post-list">
        {
          postItem.map((v,i) => {
            return <PostItem img={v.imageUrl}  userPost={v.userId} like={v.like}/>
          })
        }
        {/* <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem /> */}
    </div>
  )
}
