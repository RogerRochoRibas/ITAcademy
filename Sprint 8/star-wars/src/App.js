import './App.css';
import React from 'react'
import {ShipRender} from './spaceshipsList.js'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Welcome from './welcome'
import { Register } from './register';
import logo from './sw-logo.png'
import {Link} from 'react-router-dom';
import {StarshipDetails} from './starshipDetails'

function App() {

  return <Router className='App'>
    <header><img alt='logo' id='logo' src={logo}/></header>
    {/*<div class='nav-log'><div>Login</div><div onclick={()=>showRegister()}>Register</div></div>*/}
    <div class="nav">
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='app'>Spaceships</Link></li>
        <li><Link to='register'>Register</Link></li>
      </ul>
    </div>
    <Register/>
      <Routes>
        <Route path='/starships/:name' element={<StarshipDetails/>}></Route>
        <Route path='/' element={<Welcome/>}/>
        <Route path='app' element={<ShipRender/>}/>
      </Routes>
    </Router>
}

export default App;
