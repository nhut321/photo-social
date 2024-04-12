import React, { createContext, useEffect, useState } from 'react'
import { baseURL } from '../../baseURL'
import { redirect, useNavigate } from "react-router-dom";

import axios from 'axios'

export const authContext = createContext()
    
const AuthContextProvider = ({children}) => {
    const [isLogin, setIsLogin] = useState(false)
    const [user, setUser] = useState({})
   
    const navigate = useNavigate()

    const token = localStorage.getItem('token')

    useEffect(() => {
        if(!token) {
            console.log('khong thay token')
            navigate('/login')
        } else {
            const fetchData = async () => {
                try {
                    await axios.get(baseURL, {
                        headers: {
                            "Authorization": "Bearer " + token
                        }
                    })
                    .then(data => {
                        if (data.data.success) {
                            setIsLogin(true)
                            navigate('/')
                        } else {
                            setIsLogin(false)
                            navigate('/login')
                        }
                    })
                } catch(err) {
                }
            }
            fetchData()

        }
    },[])


    const data = {
        isLogin, 
        setIsLogin,
        setUser,
        user
    }
    return (
        <authContext.Provider value={data}>
            {children}    
        </authContext.Provider>
    )
}

export default AuthContextProvider