import React from 'react'
import {Link} from 'react-router-dom';
import {ButtonStyle} from './inputs.js'

export default function Welcome() {
    return <div className='App'>
        <h2>Welcome</h2>
        <p>In this page you can see the Star Wars spaceships.</p>
        <p>You can also click on them to see more information.</p>
        <nav>
          <ButtonStyle>
            <Link to='app'>To the App</Link>
          </ButtonStyle>
        </nav>
      </div>
  }