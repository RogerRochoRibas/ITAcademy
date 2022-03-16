import styled from "styled-components";
import React from "react"
import {data} from './components/escena/data.js';

import './App.css';

function App() {

  const Section = styled.div/*.attrs({active}={id}==={counter})*/
  `border-color:black;
  border-width:2px;
  margin:1em;
  background: ${props => props.active ? 'hsla(0, 50%, 90%, 0.6)' : 'white'};
  border-radius:30px;
  border-style:solid;
  padding: 0.5rem;
  max-width: 90%;`;

  var [counter, setCounter] = React.useState(1)
  function ClickedPrevious() {
    console.log("Before Back:", counter);
      if (counter>1){
        let oldLine = document.getElementById(counter)
        oldLine.classList.remove('active')
        setCounter(counter--);
        let newLine = document.getElementById(counter)
        newLine.classList.add('active')
      } else console.log('too low')
    console.log('After Back:', counter);
  }
  
  function ClickedNext() {
    console.log("Clicked Next: ", counter);
      if (counter<4) {
        let oldLine = document.getElementById(counter)
        oldLine.classList.remove('active')
        setCounter(counter++);
        let newLine = document.getElementById(counter)
        newLine.classList.add('active')
      } else console.log('too high')
    console.log('counter(next):', counter);
  }
  function Buttons() {
    return <div>
        <button onClick={ClickedPrevious}>Previous</button>
        <button onClick={ClickedNext}>Next</button>
      </div>
  }
  function Escena(props) {
      return data.map((data,i) => <Section id={i+1}>{i}: {data}</Section>);}
  /*function Escena() {
    return data.map(element,index)(
      <ListItem> 
          {data} 
      </ListItem>
  );}

  let ListItem = styled.li`
    max-width: 90%;
    padding: 0.5rem;
    font-size: ${props => props.active ? '1.25rem': '1rem'};
    border: ${props => props.active ? '0.15rem solid #000000': 'none'};
    border-radius: 2rem;
    background: ${props => props.active ? '#FF8C69' : 'hsla(0, 0%, 100%, 0.6)'};
    list-style: none`;*/
;
  
  return (
    <div className="App">
      <Buttons/>
      <Escena/>
      </div>
  );
}

export default App;
