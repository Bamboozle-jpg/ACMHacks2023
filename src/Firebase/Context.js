import { useEffect, useState } from "react";
import { useContext } from "react";
import { createContext } from "react";


import { signOut } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";

import { auth } from "./Firebase";

const AuthContext = createContext();

export const AuthContextProvider = ( { children } ) => {
    const[ User, setUser ] = useState();

    const GoogleLogIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup( auth, provider );
    }


    const SignOut = () => {
        signOut( auth );
    }
  
    useEffect(() => {
      const unsub = onAuthStateChanged( auth, ( currentUser ) => {
        setUser( currentUser );
        console.log( 'User', currentUser )
      } );
      
      return () => {
        unsub();
      };
    }, []);

    return(
        <AuthContext.Provider value={ { GoogleLogIn, SignOut, User } }>
            { children }
        </AuthContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext( AuthContext );
}