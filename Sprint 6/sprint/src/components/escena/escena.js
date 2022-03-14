import styled from "styled-components";
import {data} from './data.js';
/* Exercise 1
var Escena = function Escena() {
    return <p>'El nostre heroi estava surant per lespai sideral quan a la llunyania va albirar una nau espacial'</p>;
}*/

/* Exercise 2
var Escena = function Escena(props) {
  return <p>{props.scene}</p>;
}*/

// Exercise 3
const Section = styled.div`
  border-color:black;
  border-width:2px;
  margin:1em;
  border-radius:30px;
  border-style:solid;`;
  
export let ListItem = styled.p`
  max-width: 90%;
  padding: 0.5rem;
  font-size: ${props => props.active ? '1.25rem': '1rem'};
  border: ${props => props.active ? '0.15rem solid #000000': 'none'};
  border-radius: 2rem;
  background: ${props => props.active ? '#FF8C69' : 'hsla(0, 0%, 100%, 0.6)'};
  list-style: none;`
;

function Escena(props) {
    return data.map((data) => <Section><ListItem>{data}</ListItem></Section>);}

// Exercise 4

var activeLine = 1

function ClickedPrevious() {
  console.log("Anterior");
  if (activeLine > 1) {
    activeLine--
  }
console.log('activeLine:', activeLine);
}

function ClickedNext() {
  console.log("Siguiente")
  if (activeLine < 4) {
    activeLine++
  }
  console.log('activeLine:', activeLine);
}
function Buttons() {
  return <div>
      <button onClick={ClickedPrevious}>Previous</button>
      <button onClick={ClickedNext}>Next</button>
    </div>
}

export {Escena, Section, Buttons, ClickedPrevious, ClickedNext}
