import React from 'react'
import {Link} from 'react-router-dom';
import {ButtonStyle} from './buttons.js'

export default function Welcome() {
    return <div className='App'>
        <h2>Welcome</h2>
        <p>In this page you can use the App to calculate a budget by selecting fields.</p>
        <p>You can also modify the number of pages and languages with the buttons or write directly.</p>
        <nav>
          <ButtonStyle>
            <Link to='app'>To the App</Link>
          </ButtonStyle>
        </nav>
      </div>
  }