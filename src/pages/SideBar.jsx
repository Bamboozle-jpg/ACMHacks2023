import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


import { db } from '../Firebase/Firebase'
import { auth } from '../Firebase/Firebase'

import { limit } from 'firebase/firestore'
import { query } from 'firebase/firestore'
import { addDoc } from 'firebase/firestore'
import { orderBy } from 'firebase/firestore'
import { collection } from 'firebase/firestore'
import { onSnapshot } from 'firebase/firestore'
import { serverTimestamp } from 'firebase/firestore'

import MessageBox    from './MessageBox'

import { IconButton } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';

import './SideBar.css';

import menuImg from "../assets/menu_symbol.png"
import closeImg from "../assets/close_symbol.png"

import qmark from "../assets/Qmark.png"
import chat from '../assets/Chat.png'
import info from '../assets/info.png'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

let messages = [];

function SideBar() {
    // eslint-disable-next-line
    const nav = useNavigate();
    
    const [ Message, SetMessage ] = useState();

    const [hide, setHide] = useState( false );

    function showSidebar() {
        setHide(false)
    }

    function hideSidebar() {
        setHide(true);
    }
    

    const SendMessage = async ( event ) => {
        event.preventDefault();

        if( Message.trim() === "" ) {
            alert( "Blank message, cannot send" );
            return
        }

        const { uid, displayName, photoURL } = auth.currentUser;
        
        await addDoc( collection( db, "messages" ), {
            text: Message,
            name: displayName,
            avatar: photoURL,
            createdAt: serverTimestamp(),
            uid,
        });
        SetMessage( "" );
    };

    const Scrolling = useRef();


    


    useEffect(() => {
        const q = query(
          collection( db, "messages" ),  // these messages are on cloud firestore
          orderBy( "createdAt" ),
          limit( 100 )
        );
    
        const unsubscribe = onSnapshot( q, ( QuerySnapshot ) => {
            messages = [];

          QuerySnapshot.forEach( ( doc ) => {
            // messages.push( { ...doc.data(), id: doc.id } );
            messages.push( <li >{ doc.data().text }</li> );
            console.log( "THIS IS THE DOC DATA" );

            // const { UID, NAME, CREATEDAT, TEXT, AVATAR } = doc.data();

            // console.log( doc.data() )

            console.log( doc.data().text );
          } );

          SetMessage( messages );
        });
        return () => unsubscribe;
      }, []);



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
                        <img class="openButton" src={menuImg} alt='open button'/>
                    </button> 
                : null }

{/* 
                <div className="chat-box">
                    <div className="messages-wrapper">
                        {Message?.map((message) => (
                            <MessageBox key={message.id} message={message} />
                        ))}
                    </div>

                
                    <span ref={Scrolling}></span>
                
                    <SendMessage scroll={Scrolling} />
                </div> */}


                
                
                
                {/* <div class="mainPageBody">
                        {Message?.map((message) => (
                            <MessageBox key={message.id} message={message} />
                        ))}
                    <div className='message_scroll_area'>
                        
                    </div>

                    This will be the main body
                    <div className='send_message_area'>
                        <input id="input_box_id" type="text" className='input_box' onChange={ ( e ) => { SetMessage( e.target.value ); console.log( e.target.value ) } }></input>

                        <IconButton color='info' size='large' onClick={ SendMessage }>
                            <SendIcon/>
                        </IconButton>
                        
                    </div>
                </div> */}

                <div class="mainPageBody">
                    This will be the main body


                    <ul>
                        { messages }
                    </ul>

                    {/* { messages?.map((message) => (
                        <MessageBox key={message.id} message={message} />
                    ))} */}



                    <div className='send_message_area'>
                        <input id="input_box_id" type="text" className='input_box' onChange={ ( e ) => { SetMessage( e.target.value ); console.log( e.target.value ) } }></input>

                        <IconButton color='info' size='large' onClick={ SendMessage }>
                            <SendIcon/>
                        </IconButton>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBar