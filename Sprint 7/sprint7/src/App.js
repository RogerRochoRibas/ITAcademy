import React from 'react'
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Calculator from './Calculator'
import Welcome from './Welcome'

function App() {

  return (
    <Router>
      <Routes>
      <Route path='/' element={<Welcome/>}/>
      <Route path='app' element={<Calculator/>}/>
      </Routes>
    </Router>
  );
}

export default App;
