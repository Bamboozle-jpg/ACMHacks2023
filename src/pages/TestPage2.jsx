import React from 'react'
import { useNavigate } from 'react-router-dom'

function TestPage2() {
  const nav = useNavigate();

  return (
    <div>
        <h1>
          TESTPAGE2
          {/* BEGIN YOUR TESTPAGE2 EDITING HERE */}
        </h1>

        <button onClick={ () => nav( "/1" ) }>Page 1</button>
        <button onClick={ () => nav( "/" ) }>MainPage</button>
    </div>
  )
}

export default TestPage2