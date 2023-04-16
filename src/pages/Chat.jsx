import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


import menuImg from "../assets/menu_symbol.png"
import closeImg from "../assets/close_symbol.png"
import sendImg from "../assets/sendIcon.png"

import qmark from "../assets/Qmark.png"
import chat from '../assets/Chat.png'
import info from '../assets/info.png'

import { UserAuth } from '../Firebase/Context'


import { db } from '../Firebase/Firebase'
import { auth } from '../Firebase/Firebase'

import { limit } from 'firebase/firestore'
import { query } from 'firebase/firestore'
import { addDoc } from 'firebase/firestore'
import { orderBy } from 'firebase/firestore'
import { collection } from 'firebase/firestore'
import { onSnapshot } from 'firebase/firestore'
import { serverTimestamp } from 'firebase/firestore'

import './SideBar.css';



let messages = [];

function Chat() {
    const [ Message, SetMessage ] = useState();

    const Scrolling = useRef();

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
        setState("");

        // document.getElementById( "#inputbox" ).innerHTML.value = "";

        // $( '#mainform' )[ 0 ].reset();

        window.scrollTo( {
            bottom: 0,
            behavior: "smooth"
        } );

        return false;
    };

    const [state, setState] = useState("");

    const onInput = (e) => setState(e.target.value);

    const onSubmit = () => {
        setState("");
    };


    useEffect( () => {
        const q = query(
        collection( db, "messages" ),  // these messages are on cloud firestore
        orderBy( "createdAt" ),
        limit( 100 )
        );
    
        const unsubscribe = onSnapshot( q, ( QuerySnapshot ) => {
            messages = [];
            
            var a = localStorage.getItem( "UserID" );
            console.log( a );

        QuerySnapshot.forEach( ( doc ) => {
            // messages.push( { ...doc.data(), id: doc.id } );


            if( a === doc.data().uid ) {
                // messages.push( <li className="">{ doc.data().text }</li> );
                messages.push(
                    // <li className="">{ doc.data().text }</li>
                    
                    <li>
                        <div className="chatMessageSender">
                            <div className="chatFromSender">
                                { doc.data().text }
                            </div>
                        </div>
                    </li>
                );
            } else {
                messages.push(
                    // <li className="">{ doc.data().text }</li>

                    <li>
                        <div className="chatMessageOther">
                            <div className="chatFromOther">
                                { doc.data().text }
                            </div>
                        </div>
                    </li>
                );
            }



            console.log( "THIS IS THE DOC DATA" );

            console.log( doc.data().text );
        } );

        SetMessage( messages );
        });
        return () => unsubscribe;
    }, [] );

    const [ hide, setHide ] = useState( true );

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



                            <ul>
                                { messages }
                            </ul>



                        </div>

                        <form id="mainform" onSubmit={ SendMessage } class="chatSender">
                            <input id="inputbox" class="chatTextInput" type="text" placeholder="Send a message :)" value={state} onChange={ ( e ) => { 
                                SetMessage( e.target.value ); 
                                console.log( e.target.value );
                                setState( e.target.value );
                            } } ></input>

                            <button type="submit" class="chatSendMessage">
                                <img class="chatSendImage" src={ sendImg } width="75" height="75"/>
                            </button>
                        </form>

                    </div>

                </div>
            </div>
            <div class="chatBar"> 
            { /*boolean ? div : div*/}
                <button class ='selectedButton' onClick={ () => nav( "/7" ) }>
                    <div>RANDOM PEOPLE</div>
                </button>
                <button class ='chatButton' onClick={ () => nav( "/7" ) }>
                    <div>NOT RANDOM PEOPLE</div>
                </button>

            </div>
        </div>
    )
}

export default Chat
