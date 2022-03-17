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

  const ClickedMinus =()=> {
        if (counter>0){
          setCounter(counter-1);
          console.log('counter: ',counter)
        }
  }
  
function ClickedPlus() {
    if (counter<4){
      setCounter(counter+1);
    }
  }
  
  function Buttons() {
    return <div>
        <button onClick={() => ClickedMinus()}>Previous</button>
        <button onClick={() => ClickedPlus()}>Next</button>
    </div>
  }
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
