import React from 'react'

import { useNavigate } from 'react-router-dom'

function MainPage() {
    const nav = useNavigate();

    return (
        <div>
            <div class="wrapper">
            <div class="sidePanelBody">
                
            </div>
            <button class="sidePanelToggle" type="button">
                <span class="openIcon">IMAGE HERE</span>
                <span class="closeIcon">Imaage Here</span>
                
            </button>
            </div>
            <h1>
                MainPage Yay!!
                {/* BEGIN YOUR MAINPAGE EDITING HERE */}
            </h1>

            <button onClick={ () => nav( "1" ) }>Page 1</button>
            <button onClick={ () => nav( "2" ) }>Page 2</button>
            <button onClick={ () => nav( "/4" ) }>Test</button>
        </div>
    )
}

export default MainPage