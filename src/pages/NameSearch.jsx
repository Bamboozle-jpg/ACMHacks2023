import React from 'react'
import '../App.css'
import { useNavigate } from 'react-router-dom'

import { useState } from 'react'

import menuImg from "../assets/menu_symbol.png"
import closeImg from "../assets/close_symbol.png"
import qmark from "../assets/Qmark.png"
import chat from '../assets/Chat.png'
import info from '../assets/info.png'
import { doc, getDoc, collection, getDocs } from 'firebase/firestore'
import { db } from '../Firebase/Firebase'

function NameSearch() {
    const [ hide, setHide ] = useState( true );
    const [ ratio, setRatio ] = useState( 0 );
    const [ bestDoc, setBest ] = useState("");
    function showSidebar() {
        setHide(false)
    }
    function hideSidebar() {
        setHide(true)
    }
    const nav = useNavigate();


    const email = localStorage.getItem( "UserEmail" );
    let document;

    retrieveInfo(email).then((res) => test(res))
    // console.log("Doc : ")
    // console.log(document);

    function test(doc) {
        var docCollection = doc;
        var userDocument = docCollection[docCollection.length-1]
        var bestDocumentID = 0;
        var bestDocumentScore = 0;
        var currentDocumentScore;
        for (var i = 0; i < docCollection.length-1; i++) {
            currentDocumentScore = 0;
            console.log("Doc number");
            console.log(i+1);
            // console.log(docCollection[i]);

            if (docCollection[i].ai === true && userDocument.ai === true) {
                currentDocumentScore += 2;
            }
            if (docCollection[i].anime === true && userDocument.anime === true) {
                currentDocumentScore += 2;
            }
            if (docCollection[i].beach === true && userDocument.beach === true) {
                currentDocumentScore += 2;
            }
            if (docCollection[i].cryptobro === true && userDocument.cryptobro === true) {
                currentDocumentScore += 2;
            }
            if (docCollection[i].debate === true && userDocument.debate === true) {
                currentDocumentScore += 2;
            }
            if (docCollection[i].gym  === true && userDocument.gym === true) {
                currentDocumentScore += 2;
            }
            if (docCollection[i].sports  === true && userDocument.sports === true) {
                currentDocumentScore += 2;
            }
            if (docCollection[i].tech  === true && userDocument.tech === true) {
                currentDocumentScore += 2;
            }
            if (docCollection[i].theatre  === true && userDocument.theatre === true) {
                currentDocumentScore += 2;
            }
            if (docCollection[i].video_games  === true && userDocument.video_games === true) {
                currentDocumentScore += 2;
            }
            if (docCollection[i].ai === false && userDocument.ai === false) {
                currentDocumentScore += 1;
            }
            if (docCollection[i].anime === false && userDocument.anime === false) {
                currentDocumentScore += 1;
            }
            if (docCollection[i].beach === false && userDocument.beach === false) {
                currentDocumentScore += 1;
            }
            if (docCollection[i].cryptobro === false && userDocument.cryptobro === false) {
                currentDocumentScore += 1;
            }
            if (docCollection[i].debate === false && userDocument.debate === false) {
                currentDocumentScore += 1;
            }
            if (docCollection[i].gym  === false && userDocument.gym === false) {
                currentDocumentScore += 1;
            }
            if (docCollection[i].sports  === false && userDocument.sports === false) {
                currentDocumentScore += 1;
            }
            if (docCollection[i].tech  === false && userDocument.tech === false) {
                currentDocumentScore += 1;
            }
            if (docCollection[i].theatre  === false && userDocument.theatre === false) {
                currentDocumentScore += 1;
            }
            if (docCollection[i].video_games  === false && userDocument.video_games === false) {
                currentDocumentScore += 1;
            }

            if (currentDocumentScore > bestDocumentScore) {
                bestDocumentID = i;
                bestDocumentScore = currentDocumentScore;
            }
        }
        console.log(userDocument);

        setRatio( Math.round((Math.log(bestDocumentScore / .2)*21.5)*100)/100);
        setBest(docCollection[bestDocumentID].email);

        console.log(ratio);
    }
    
    async function retrieveInfo (email) {
        const docRef = doc(db, "tags", email);
        const docSnap = await getDoc(docRef);
        const docCollection = []

        const querySnapshot = await getDocs(collection(db, "tags"));
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            docCollection.push(doc.data())
        });

        console.log(docCollection)

        if (docSnap.exists()) {
            console.log("Document Data:", docSnap.data());
            docCollection.push(docSnap.data());
            return docCollection;
        } else {
            console.log("No doc :(");
        }
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
                    <div id='background'>
                        <h1 id='title'>NameSearch</h1>
                        <NameButton/>
                        <h1 id='title'>The person most similar in interest to you, is {ratio}% similar</h1>
                        <h3 id='generatebar'>{bestDoc}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}


function NameButton() {

    function writeName() {

        console.log("test");

    }

    return (
    <button onClick={writeName}class='eventbutton'>
        Click this to get a name!
    </button>
    );
}

export default NameSearch