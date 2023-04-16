import React from 'react';

import { useState } from 'react';

import { UserAuth } from '../Firebase/Context';
import { useNavigate } from 'react-router-dom';

function NotChat() {
  const Navigate = useNavigate();

  const { User } = UserAuth();

  const [ LoggedIn, SetLoggedIn ] = useState( false );

  if( User !== null ) {
    SetLoggedIn( true );
  } else {
    SetLoggedIn( false );
  }


  return (
    <>
      { LoggedIn ? () => Navigate( "/chatroom" ) : () => Navigate( "/" ) }
    </>
  )
}

export default NotChat;
