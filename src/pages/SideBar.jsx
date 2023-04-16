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

import { IconButton } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';

import './SideBar.css';

import menuImg from "../assets/menu_symbol.png"
import closeImg from "../assets/close_symbol.png"

import qmark from "../assets/Qmark.png"
import chat from '../assets/Chat.png'
import info from '../assets/info.png'

let messages = [];

function SideBar() {
    // const Scrolling = useRef();
    // eslint-disable-next-line
    const nav = useNavigate();
    
    const [ Message, SetMessage ] = useState("");

    const [hide, setHide] = useState( false );

    function showSidebar() {
        setHide( false );
    }

    function hideSidebar() {
        setHide( true );
    }
    

    const SendMessage = async ( event ) => {
        event.preventDefault();

        if( Message.trim() === "" ) {
            alert( "Blank message, cannot send" );
            return;
        }

        const { uid, displayName, photoURL } = auth.currentUser;
        
        await addDoc( collection( db, "messages" ), {
            text: Message,
            name: displayName,
            avatar: photoURL,
            createdAt: serverTimestamp(),
            uid,
        });
        SetMessage("");
        setState("");
    };
    
    const Scrolling = useRef();

    const [state, setState] = useState("");

    const onInput = (e) => setState(e.target.value);

    const onSubmit = () => {
        setState("");
    };

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
                });

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
                            <img alt="button" class="closeButton" src={closeImg} onClick={ hideSidebar }/>
                        </div>
                        <button class ='sideButton' onClick={ () => nav( "/1" ) }>
                            <img alt="this" src={qmark} width='23' height = '23' class='padding'/>
                            <div>RANDOM PEOPLE</div>
                        </button>
                        <button class ='sideButton' onClick={ () => nav( "/1" ) }>
                            <img alt="this" src={chat} width='25' height = '25' class='padding'/>
                            <div>CHATS</div>
                        </button>
                        <button class ='sideButton' onClick={ () => nav( "/1" ) }>
                            <img alt="sidebutton" src={info} width='25' height = '25' class='padding'/>
                            <div>USER INFO</div>
                        </button>

                    </div>
                }

                {hide === true ? 
                    <button class="sidePanelToggle" type="button" onClick={ showSidebar }>
                        <img class="openButton" src={menuImg} alt='open button'/>
                    </button> 
                : null }

                <div class="mainPageBody">
                    This will be the main body


                    <ul>
                        { messages }
                    </ul>

                    <form onSubmit={SendMessage} className='send_message_area'>
                        <input id="input_box_id" type="text" className='input_box' value={state}
                        onChange={ ( e ) => {
                            SetMessage(e.target.value);
                            console.log(e.target.value);
                            setState(e.target.value) }
                        }></input>

                        <IconButton type="submit" color='info' size='large'>
                            <SendIcon/>
                        </IconButton>
                        
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SideBar