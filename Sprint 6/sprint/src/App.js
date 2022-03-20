import styled from "styled-components";
import React from "react"
import {data} from './components/escena/data.js';
import './App.css';

function App() {

  const Section = styled.div
  `border-color:black;
  border-width:2px;
  margin:1em;
  background: ${props => props.active ? '#FF8C69' : 'hsla(0, 90%, 100%)'};
  border-radius:30px;
  border-style:solid;
  padding: 0.5rem;
  max-width: 90%;`;

  var [counter, setCounter] = React.useState(0)

  const ClickedPrevious=()=> {
    if (counter >0) {
      setCounter(counter-1);  
    }
  }
  
  function ClickedNext() {
    if (counter<3) {
      setCounter(counter+1);
    }
  }
  
  function Buttons() {
    return <div>
        <button onClick={() => ClickedPrevious()}>Previous</button>
        <button onClick={() => ClickedNext()}>Next</button>
    </div>
  }

  
// Exercise 3
  function Escena() {
    return data.map((data,i) => <Section active={i===counter} key={i} id={i+1}>{i+1}: {data}</Section>);}
  ;
  
  return (
    <div className="App">
      <Buttons/>
      <Escena/>
    </div>
  );
}

export default App;
