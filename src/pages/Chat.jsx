import React from 'react'
import menuImg from "../assets/menu_symbol.png"
import closeImg from "../assets/close_symbol.png"
import sendImg from "../assets/sendIcon.png"

import { useNavigate } from 'react-router-dom'

import { useState } from 'react'

function Chat() {
    const [hide, setHide] = useState( false );

    function showSidebar() {
        setHide(false)
    }

    function hideSidebar() {
        setHide(true)
    }

    return (
        <div>
            <div class="outerWrapper sidePanelOpen">
                { hide === true ? null : 
                    <div class="sidePanel"> 
                        This stuff will be in a side panel 
                        <img class="closeButton" src={closeImg} onClick={ hideSidebar }/>
                    </div>
                }
                <div class="chatMainPage">

                    <div class="chatHeadContainer">
                        {hide === true ? 
                            <button class="sidePanelToggle" type="button" onClick={ showSidebar }>
                                <img class="openButton" src={menuImg} />
                            </button> 
                        : null }
                        <div class="chatHead">
                            Hi
                        </div>

                    </div>
                    <div class="chatMessagesAndSenderWrapper">

                        <div class="chatMessages">
                            Yo
                        </div>
                        <div class="chatSender">
                            <input class="chatTextInput" type="text" placeholder="Send a message :"></input>
                            <button class="chatSendMessage">
                                <img class="chatSendImage" src={sendImg} width="75" height="75"/>
                            </button>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Chat
