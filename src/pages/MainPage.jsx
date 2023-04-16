import React from 'react'
import { useState } from 'react';

import { useNavigate } from 'react-router-dom'

import { UserAuth } from '../Firebase/Context';

function MainPage() {
    const nav = useNavigate();

  const { GoogleLogIn } = UserAuth();
  const { SignOut } = UserAuth();
  const { User } = UserAuth();

  
  // eslint-disable-next-line
  const [ Name, SetName ] = useState( "None" );


  const HandleSignIn = async ( e ) => {
    try {
      await GoogleLogIn();
      console.log( "Successful login" );
    } catch( error ) {
      console.log( error );
      console.log( "error above" );
    }
  }

  const HandleSignOut = async ( e ) => {
    e.preventDefault();

    await SignOut();

    console.log( "Signed out" );
  }

  
  return ( 
    <div id='background'>
      <h1 id='title'>
        MainPage
        {/* BEGIN YOUR MAINPAGE EDITING HERE */}
      </h1>

      <h1 id ='title'>
        Logged in as: { User?.displayName }
      </h1>
      <br></br>
      <h1 id ='title'>
        User email: { User?.email }
      </h1>
      <div class='mainPageTurn'>
        
        <button onClick={ HandleSignIn }id='mainPageButton'>Log in</button>
        <button onClick={ HandleSignOut }id='mainPageButton'>Log out</button>
        <button onClick={ () => nav( "/chatroom" ) }id='mainPageButton'>Chatroom</button>
      </div>
    </div>
  )
}

export default MainPage