import React from 'react'
import menuImg from "../assets/menu_symbol.png"
import closeImg from "../assets/close_symbol.png"
import sendImg from "../assets/sendIcon.png"

import { useNavigate } from 'react-router-dom'

import { useState } from 'react'

import qmark from "../assets/Qmark.png"
import chat from '../assets/Chat.png'
import info from '../assets/info.png'

function Chat() {
    const [hide, setHide] = useState( false );

    function showSidebar() {
        setHide(false)
    }

    function hideSidebar() {
        setHide(true)
    }

    const nav = useNavigate();

    const otherPerson = [true, false, true, false, true, false, true, true, false, false, true, true]
    const messageContent = ["Hey!", "Hello!", "Nice to meet you!", "Nice to meet you too! How are you doing today?", "I'm doing pretty good, and now I will type a very long message to prove a point about this app", "lol", "haha"]

    return (
        <div class="chatWholeWrapper">
            <div class="outerWrapper sidePanelOpen">
            { hide === true ? null : 
                    <div class="sidePanel"> 
                        This stuff will be in a side panel 

                        <div class="closeButtonWrapper">
                            <img class="closeButton" src={closeImg} onClick={ hideSidebar }/>
                        </div>
                        <button class ='sideButton' onClick={ () => nav( "/1" ) }>
                            <img src={qmark} width='23' height = '23' class='padding'/>
                            <div>RANDOM PEOPLE</div>
                        </button>
                        <button class ='sideButton' onClick={ () => nav( "/1" ) }>
                            <img src={chat} width='25' height = '25' class='padding'/>
                            <div>CHATS</div>
                        </button>
                        <button class ='sideButton' onClick={ () => nav( "/1" ) }>
                            <img src={info} width='25' height = '25' class='padding'/>
                            <div>USER INFO</div>
                        </button>

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
                            <p class='chatName'>Johnathan Wick</p>

                        </div>

                    </div>
                    <div class="chatMessagesAndSenderWrapper">
                        
                        <div class="chatMessages">
                            { otherPerson[0] ? 
                                <div class="chatMessageOther">
                                    <div class="chatFromOther">
                                        {messageContent[0]}
                                    </div>
                                </div> :
                                <div class="chatMessageSender">
                                    <div class="chatFromSender">
                                        {messageContent[0]}
                                    </div>
                                </div>
                            }
                            { otherPerson[1] ? 
                                <div class="chatMessageOther">
                                    <div class="chatFromOther">
                                        {messageContent[1]}
                                    </div>
                                </div> :
                                <div class="chatMessageSender">
                                    <div class="chatFromSender">
                                        {messageContent[1]}
                                    </div>
                                </div>
                            }
                            { otherPerson[2] ? 
                                <div class="chatMessageOther">
                                    <div class="chatFromOther">
                                        {messageContent[2]}
                                    </div>
                                </div> :
                                <div class="chatMessageSender">
                                    <div class="chatFromSender">
                                        {messageContent[2]}
                                    </div>
                                </div>
                            }
                            { otherPerson[3] ? 
                                <div class="chatMessageOther">
                                    <div class="chatFromOther">
                                        {messageContent[3]}
                                    </div>
                                </div> :
                                <div class="chatMessageSender">
                                    <div class="chatFromSender">
                                        {messageContent[3]}
                                    </div>
                                </div>
                            }
                            { otherPerson[4] ? 
                                <div class="chatMessageOther">
                                    <div class="chatFromOther">
                                        {messageContent[4]}
                                    </div>
                                </div> :
                                <div class="chatMessageSender">
                                    <div class="chatFromSender">
                                        {messageContent[4]}
                                    </div>
                                </div>
                            }
                            { otherPerson[5] ? 
                                <div class="chatMessageOther">
                                    <div class="chatFromOther">
                                        {messageContent[5]}
                                    </div>
                                </div> :
                                <div class="chatMessageSender">
                                    <div class="chatFromSender">
                                        {messageContent[5]}
                                    </div>
                                </div>
                            }
                            { otherPerson[6] ? 
                                <div class="chatMessageOther">
                                    <div class="chatFromOther">
                                        {messageContent[6]}
                                    </div>
                                </div> :
                                <div class="chatMessageSender">
                                    <div class="chatFromSender">
                                        {messageContent[6]}
                                    </div>
                                </div>
                            }
                        </div>
                        <div class="chatSender">
                            <input class="chatTextInput" type="text" placeholder="Send a message :)"></input>
                            <button class="chatSendMessage">
                                <img class="chatSendImage" src={sendImg} width="75" height="75"/>
                            </button>
                        </div>

                    </div>

                </div>
            </div>
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

export default Chat
