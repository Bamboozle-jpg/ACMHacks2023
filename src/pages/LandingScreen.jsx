import React from 'react'
import '../App.css'

import { useNavigate } from 'react-router-dom'

function LandingScreen() {
  const nav = useNavigate();

  return (
    <div id="background">
        <h1 id='title'>LandingScreen</h1>
        <br></br>
    
        {/*These three are all the same redirect*/}
        <button onClick={ () => nav( "/1" ) }id='button'>Sign Up</button>  <br></br><br></br>
        <button onClick={ () => nav( "/1" ) }id='button'>Log in</button>  <br></br><br></br>
        <button onClick={ () => nav( "/1" ) }id='button'>Go to Site </button>  <br></br><br></br>
    </div>
  )
}

export default LandingScreen