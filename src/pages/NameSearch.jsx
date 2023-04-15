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
        <h3 id='timer'>bruh</h3>
    </div>

  )
}

/*var delay = 8000;
var lastClick = 0;
var interval = setInterval(NameButton, 5000);
*/

function NameButton() {
    var nameList = ['tom', 'penis', 'harry', 'larry', 'barry']
    function writeName() {
        /*
        console.log(lastClick);

        if (lastClick >= (Date.now() - delay)){
            document.getElementById("timer").textContent = delay/1000 + " seconds";
            return;
        }
        lastClick = Date.now();
        */
        const random = Math.floor(Math.random() * nameList.length);
        document.getElementById("generatebar").textContent = nameList[random];

    }
  
    return (
      <button onClick={writeName}id='eventbutton'>
        Clicked this to get a name!
      </button>
    );
  }

export default NameSearch