import React from 'react'
import menuImg from "../assets/menu_symbol.png"
import closeImg from "../assets/close_symbol.png"

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
                        <img class="closeButton" src={closeImg} onClick={ hideSidebar }/>
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