import React from 'react'
import menuImg from "../assets/menu_symbol.png"
import closeImg from "../assets/close_symbol.png"
import qmark from "../assets/Qmark.png"
import chat from '../assets/Chat.png'
import info from '../assets/info.png'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'



function SideBar() {
    const nav = useNavigate();

    const [testVar, setTestVar] = useState();

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
                {hide === true ? 
                    <button class="sidePanelToggle" type="button" onClick={ showSidebar }>
                        <img class="openButton" src={menuImg} />
                    </button> 
                : null }
                <div class="mainPageBody">
                    This will be the main body  {testVar}
                </div>
            </div>
        </div>
    )
}

export default SideBar