import React from 'react';
import { Navigate } from 'react-router-dom';
import { UserAuth } from '../Firebase/Context';

const ProtectedRoute = ( { children } ) => {
  const { User } = UserAuth();

  if( !User || !User?.email.includes( "ucsc.edu" ) ) {
      alert( "You must be logged in with your UCSC Gmail account to use this." );

      return <Navigate to='/' />;
  }
  return children;
};

export default ProtectedRoute;