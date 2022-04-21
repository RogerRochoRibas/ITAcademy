import './App.css';
import React from 'react'
import {ShipRender} from './starshipsList.js'
import axios from 'axios'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Welcome from './welcome'
import Main from './main'

function App() {
  return (
    <div className="App">
      <h1>Star Wars</h1>
      <ShipRender/>
    </div>
  );
}

export default App;
