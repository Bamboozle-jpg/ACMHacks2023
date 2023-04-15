import React from 'react'
import menuImg from "../assets/menu_symbol.png"
import closeImg from "../assets/close_symbol.png"

import { useNavigate } from 'react-router-dom'

import { useState } from 'react'

import './SideBar.css';


function SideBar() {
    // eslint-disable-next-line
    const nav = useNavigate();
    
    // eslint-disable-next-line
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
                        <img class="closeButton" src={closeImg} onClick={ hideSidebar } alt='close button' />
                    </div>
                }
                {hide === true ? 
                    <button class="sidePanelToggle" type="button" onClick={ showSidebar }>
                        <img class="openButton" src={menuImg} alt='open button'/>
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