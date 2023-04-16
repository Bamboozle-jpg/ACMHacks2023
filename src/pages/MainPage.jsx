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
    <div>
      <h1>
        MainPage
        {/* BEGIN YOUR MAINPAGE EDITING HERE */}
      </h1>

      <h1>
        Logged in as: { User?.displayName }
      </h1>
      <br></br>
      <h1>
        User email: { User?.email }
      </h1>

      <button onClick={ () => nav( "1" ) }>Page 1</button>
      <button onClick={ () => nav( "2" ) }>Page 2</button>
      <button onClick={ HandleSignIn }>Log in</button>
      <button onClick={ HandleSignOut }>Log out</button>
      <button onClick={ () => nav( "/chatroom" ) }>Chatroom</button>
    </div>
  )
}

export default MainPage