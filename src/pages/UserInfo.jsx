import React from 'react'
import { useNavigate } from 'react-router-dom'

function UserInfo() {
  const nav = useNavigate();
  return (
    <div id='background'>
        <h1 id='title'>User Info</h1>
        <input type="text" id="userInput" placeholder='Enter your contact info:' ></input>
    </div>
  )
}

export default UserInfo