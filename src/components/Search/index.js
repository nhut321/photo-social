import React from "react";
import "./Search.css";
import { useNavigate } from 'react-router-dom'

export default function Search() {
  const navigate = useNavigate()
  const logoutFn = () => {
    localStorage.clear('token', 'user')
    navigate('/login')
    // return token
  }
  return (
    <div className="search">
      <div className="search-input">
        <input placeholder="Search..." />
        <div className="search-input__icon">
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
      <div className="bell">
        <i className="fa-regular fa-bell"></i>
      </div>
      <div className="logout" onClick={logoutFn}>
        <i className="fa-solid fa-arrow-right-from-bracket"></i>
      </div>
    </div>
  );
}
