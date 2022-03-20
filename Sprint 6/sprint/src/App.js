import styled from "styled-components";
import React from "react"
import {data} from './components/escena/data.js';
import './App.css';

function App() {

  // Buttons
  var [counter, setCounter] = React.useState(0)

  function Buttons() {
    const ClickedPrevious=()=> {
      if (counter >0) {
        setCounter(counter-1);  
      }
    }
  
    const ClickedNext=()=> {
      if (counter<3) {
        setCounter(counter+1);
      }
    }
  
  return <div>
      <button onClick={() => ClickedPrevious()}>Previous</button>
      <button onClick={() => ClickedNext()}>Next</button>
    </div>
  }
  // Texts
  const Section = styled.div
  `border-color:black;
  border-width:2px;
  margin:1em;
  background: ${props => props.active ? '#FF8C69' : 'hsla(0, 90%, 100%)'};
  border-radius:30px;
  border-style:solid;
  padding: 0.5rem;
  max-width: 90%;`;

  function Escena() {
    return data.map((data,i) => <Section active={i===counter} key={i} id={i+1}>{i+1}: {data}</Section>);
  }
  // Welcome
  var [welcome, setWelcome] = React.useState(true)
  const Continue=()=> {setWelcome(false)}
  if (welcome===true) {
    return <div className="App">
      <button onClick={() => Continue()}>Continue</button>
      <p>In this page we use React components to show 4 lines of text. You can use the Previous and Next buttons to choose which line is highlighted.</p>
    </div>
  } 
  // Main Page
  else {
    return (
      <div className="App">
        <Buttons/>
        <Escena/>
      </div>
    )
  }
}

export default App;
