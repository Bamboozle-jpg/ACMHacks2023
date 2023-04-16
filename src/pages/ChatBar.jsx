import React from 'react'
import { useNavigate } from 'react-router-dom'

function ChatBar() {

  const nav = useNavigate();
  return (
        <div>
            <div class="chatBar"> 
            { /*boolean ? div : div*/}
                <button class ='selectedButton' onClick={ () => nav( "/1" ) }>
                    <div>RANDOM PEOPLE</div>
                </button>
                <button class ='chatButton' onClick={ () => nav( "/1" ) }>
                    <div>NOT RANDOM PEOPLE</div>
                </button>

            </div>
        </div>
    )
}

export default ChatBar

/*
var = something
Check for each div:
    if var = id, make it show up as a diff class with diff css

Each div, if clicked
    Change the var, to it's id */