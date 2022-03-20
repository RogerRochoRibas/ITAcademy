import styled from "styled-components";
import React from "react"
import {data} from './components/escena/data.js';
import './App.css';
import img1 from './img/1.jpg'

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
  background: ${props => props.active ? '#FF8C69' : 'white'};
  border-radius:30px;
  border-style:solid;
  padding: 0.5rem;
  max-width: 90%;`;

  function Scene() {
    return data.map((data,i) => <Section active={i===counter} key={i} id={i+1}>{i+1}: {data.txt}</Section>);
  }
  // Background
  var Body = styled.div`
  height:100%;
  background-size:cover;
  background-image:url(${img1};
  `;

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
      <Body className="App" id="something">
        <Buttons/>
        <Scene/>
      </Body>
    )
  }
}

export default App;
