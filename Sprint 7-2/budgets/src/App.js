import React from 'react'
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import CheckboxList from './CheckboxList'
import Welcome from './Welcome'
import { priceCalculator } from './Calculations';

function App() { 
  let [Budget, setBudget] = React.useState({'web':false,'seo':false,'ads':false,'pages':1,'langs':1,'total':0}) 

  function UpdateBudget(field,value) {
    let newBudget = {...Budget};
    newBudget[field]=value;
    localStorage.setItem(field,value)
    priceCalculator(newBudget);
    setBudget(newBudget);
  }

  
  return (
    <Router>
      <Routes>
      <Route path='/' element={<Welcome/>}/>
      <Route path='app' element={<CheckboxList Budget={Budget} UpdateBudget={UpdateBudget}/>}/>
      </Routes>
    </Router>
  );
}

export default App;
