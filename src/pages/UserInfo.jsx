import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import menuImg from "../assets/menu_symbol.png"
import closeImg from "../assets/close_symbol.png"
import qmark from "../assets/Qmark.png"
import chat from '../assets/Chat.png'
import info from '../assets/info.png'

function UserInfo() {

    const [ hide, setHide ] = useState( true );

    function showSidebar() {
        setHide(false)
    }

    function hideSidebar() {
        setHide(true)
    }
    const nav = useNavigate();
    return (
        <div>
            <div class="outerWrapper sidePanelOpen">
                { hide === true ? null : 
                    <div class="sidePanel"> 
                        This stuff will be in a side panel 

                        <div class="closeButtonWrapper">
                            <img class="closeButton" src={closeImg} onClick={ hideSidebar }/>
                        </div>
                        <button class ='sideButton' onClick={ () => nav( "/7" ) }>
                            <img src={qmark} width='23' height = '23' class='padding'/>
                            <div>RANDOM PEOPLE</div>
                        </button>
                        <button class ='sideButton' onClick={ () => nav( "/chatroom" ) }>
                            <img src={chat} width='25' height = '25' class='padding'/>
                            <div>CHATS</div>
                        </button>
                        <button class ='sideButton' onClick={ () => nav( "/5" ) }>
                            <img src={info} width='25' height = '25' class='padding'/>
                            <div>USER INFO</div>
                        </button>

                    </div>
                }
                <div id='background2'>
                    {hide === true ? 
                        <button class="sidePanelToggle" type="button" onClick={ showSidebar }>
                            <img class="openButton" src={menuImg} />
                        </button> 
                    : null }
                    <h1 id='title'>User Info</h1>
                    <form>
                    <div class="horizBox">
                            <div id="title">Name : </div>
                            <input type="text" id="userInput" placeholder="Enter what you'd like to be called :"></input>
                        </div>
                        <div class="horizBox">
                            <div id="title">Contact Info : </div>
                            <input type="text" id="userInput" placeholder='Enter your contact info:'></input>
                        </div>
                        <div class="horizBox">
                            <div id="title">Phone Number : </div>
                            <input type="text" id="userInput" placeholder='Enter your phone number:'></input>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UserInfo