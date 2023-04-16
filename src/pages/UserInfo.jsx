import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import "./UserInfo.css";

import menuImg from "../assets/menu_symbol.png"
import closeImg from "../assets/close_symbol.png"
import qmark from "../assets/Qmark.png"
import chat from '../assets/Chat.png'
import info from '../assets/info.png'



import { db } from '../Firebase/Firebase'
import { auth } from '../Firebase/Firebase'

import { limit } from 'firebase/firestore'
import { query } from 'firebase/firestore'
import { addDoc } from 'firebase/firestore'
import { setDoc } from 'firebase/firestore'
import { orderBy } from 'firebase/firestore'
import { collection } from 'firebase/firestore'
import { onSnapshot } from 'firebase/firestore'
import { serverTimestamp } from 'firebase/firestore'



function UserInfo() {
    const [ Anime, SetAnime ] = useState( false );
    const [ Artificial_Intelligence, Set_Artificial_Intelligence ] = useState( false );
    const [ Beach, SetBeach ] = useState( false );
    const [ CryptoBro, SetCryptoBro ] = useState( false );
    const [ Debate, SetDebate ] = useState( false );
    
    const [ Gym, SetGym ] = useState( false );
    const [ Sports, SetSports ] = useState( false );
    const [ Tech, SetTech ] = useState( false );
    const [ Theatre, SetTheatre ] = useState( false );
    const [ VideoGames, SetVideoGames ] = useState( false );

    const interest_list = [ Anime, Artificial_Intelligence, Beach, CryptoBro, Debate, Gym, Sports, Tech, Theatre, VideoGames ];
    const interest_list_actual = [ Anime, Artificial_Intelligence, Beach, CryptoBro, Debate, Gym, Sports, Tech, Theatre, VideoGames ];

    function testfunc() {

    }

    function HandleSave() {
      interest_list_actual[ 0 ] = SetAnime( Anime );
      interest_list_actual[ 1 ] = Set_Artificial_Intelligence( true );
      interest_list_actual[ 2 ] = SetBeach( Beach );
      interest_list_actual[ 3 ] = SetCryptoBro( CryptoBro );
      interest_list_actual[ 4 ] = SetDebate( Debate );
      interest_list_actual[ 5 ] = SetGym( Gym );
      interest_list_actual[ 6 ] = SetSports( Sports );
      interest_list_actual[ 7 ] = SetTech( Tech );
      interest_list_actual[ 8 ] = SetTheatre( Theatre );
      interest_list_actual[ 9 ] = SetVideoGames( VideoGames );

      console.log( interest_list_actual );
      console.log( interest_list )
    }

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
                            <input type="text" id="userInput" placeholder='Enter what you would prefer to be called:'></input>
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
            
            
                  <div className='border2'>
                    <div className='border'>
                        <label>
                          <input type='checkbox' value={ Anime } onChange={ () => SetAnime( !Anime ) } />
                          Anime
                        </label>

                        <label>
                          <input type='checkbox' value={ Artificial_Intelligence } />
                          Artificial Intelligence
                        </label>

                        <label>
                          <input type='checkbox' value={ Beach }/>
                          Beach
                        </label>

                        <label>
                          <input type='checkbox' value={ CryptoBro }/>
                          Certified® CryptoBro™
                        </label>

                        <label>
                          <input type='checkbox' value={ Debate } />
                          Debate
                        </label>
                    </div>

                    <div className='border'>
                        <label>
                          <input type='checkbox' value={ Gym } />
                          Gym
                        </label>

                        <label>
                          <input type='checkbox' value={ Sports }/>
                          Sports
                        </label>

                        <label>
                          <input type='checkbox' value={ Tech } />
                          Tech
                        </label>

                        <label>
                          <input type='checkbox' value={ Theatre } />
                          Theatre
                        </label>
                        
                        <label>
                          <input type='checkbox' value={ VideoGames }/>
                          Video Games
                        </label>
                    </div>


                  </div>

                    <div className='border'>
                      <button onClick={ HandleSave }>SAVE</button>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default UserInfo