import './App.css';
import React from 'react'
import {ShipRender} from './spaceshipsList.js'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Welcome from './welcome'
import logo from './sw-logo.png'
import {Link} from 'react-router-dom';

function App() {
  return <Router className='App'>
    <header><img id='logo' src={logo}/></header>
    <div class="nav">
      <ul>
        <li class="home"><Link to='/'>Home</Link></li>
        <li class="tutorials"><Link to='app'>Spaceships</Link></li>
      </ul>
    </div>
      <Routes>
      <Route path='/' element={<Welcome/>}/>
      <Route path='app' element={<ShipRender/>}/>
      </Routes>
    </Router>
}

export default App;
