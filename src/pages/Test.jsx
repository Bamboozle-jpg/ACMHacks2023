import React from 'react'

import { useNavigate } from 'react-router-dom'

function Test() {

    const nav = useNavigate();

  return (
    <div>
        <h1>
            Test
        </h1>

        <button onClick={ () => nav( "/" ) }>MainPage</button>
        <button onClick={ () => nav( "/2" ) }>Page 2</button>
        <button onClick={ () => nav( "/1" ) }>Page 1</button>
    </div>

  )
}

export default Test