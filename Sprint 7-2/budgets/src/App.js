import React from 'react'
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import CheckboxList from './CheckboxList'
import Welcome from './Welcome'

function App() {

  let [Budget, setBudget] = React.useState({'web':'false','seo':'false','ads':'false','pages':1,'langs':1}) 

  function UpdateBudget(field,value) {
    let newBudget = {...Budget};
    newBudget[field]=value;
    setBudget(newBudget);
    console.log('Budget: ',Budget.web)
  }

  return (
    <Router>
      <Routes>
      <Route path='/' element={<Welcome/>}/>
      <Route path='app' element={<CheckboxList UpdateBudget={UpdateBudget}/>}/>
      </Routes>
    </Router>
  );
}

export default App;
