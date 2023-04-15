import React from 'react'

import { useNavigate } from 'react-router-dom'

function LandingScreen() {
  const nav = useNavigate();

  return (
    <div>
    LandingScreen <br></br>
    <button onClick={ () => nav( "/1" ) }>Sign In</button>
    </div>
  )
}

export default LandingScreen