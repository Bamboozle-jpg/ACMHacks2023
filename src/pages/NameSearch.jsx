import React from 'react'
import '../App.css'
import { useNavigate } from 'react-router-dom'


function NameSearch() {
  const nav = useNavigate();
  return (
    <div id='background'>
        <h1 id='title'>NameSearch</h1>
        <NameButton />
        <h3 id='generatebar'>hello</h3>
    </div>

  )
}


function NameButton() {
    var nameList = ['tom', 'penis', 'harry', 'larry', 'barry']

    function writeName() {

        const random = Math.floor(Math.random() * nameList.length);
        document.getElementById("generatebar").textContent = nameList[random];

    }
  
    return (
      <button onClick={writeName}class='eventbutton'>
        Click this to get a name!
      </button>
    );
  }

export default NameSearch