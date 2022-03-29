import React from "react"
import './App.css';
import { Route, BrowserRouter as Router} from "react-router-dom";
import Calculator from './Calculator'
import Welcome from './Welcome'

function App() {

  return (
    <Router>
      <h1>Routing?</h1>
      <Route path="/" exact component={Welcome}></Route>
      <Route path="/App" component={Calculator}></Route>
    </Router>
  );
}

export default App;
