import React from 'react'
import { useState } from 'react';

import { useNavigate } from 'react-router-dom'

import { getAuth } from "firebase/auth";
import { signOut } from 'firebase/auth';
import { getRedirectResult } from 'firebase/auth';
import { GoogleAuthProvider } from "firebase/auth";
import { signInWithRedirect } from 'firebase/auth';


import { UserAuth } from '../Firebase/Context';

function MainPage() {
  const nav = useNavigate();

  const { GoogleLogIn } = UserAuth();
  const { SignOut } = UserAuth();
  const { User } = UserAuth();

  const [ Name, SetName ] = useState( "None" );


  // const HandleSignIn = ( e ) => {
  //   e.preventDefault();
  //   console.log( 'we made it here' );
  //   // signInWithRedirect( auth, provider );

  //   signInWithRedirect( auth, provider )
  //   .then((result) => {
  //     // This gives you a Google Access Token. You can use it to access the Google API.
  //     const credential = GoogleAuthProvider.credentialFromResult(result);
  //     const token = credential.accessToken;
  //     // The signed-in user info.
  //     const user = result.user;
  //     // IdP data available using getAdditionalUserInfo(result)
  //     // ...

  //     SetName( user );
  //     console.log( user );
  //     console.log( 'logged in' );

  //   }).catch((error) => {
  //     // Handle Errors here.
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     // The email of the user's account used.
  //     const email = error.customData.email;
  //     // The AuthCredential type that was used.
  //     const credential = GoogleAuthProvider.credentialFromError(error);
  //     // ...
  //   });
  // }


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
        MainPage Yay!!
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
    </div>
  )
}

export default MainPage