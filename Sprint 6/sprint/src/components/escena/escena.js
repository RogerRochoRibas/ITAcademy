import React from "react";
import styled from "styled-components";
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
  border-style:solid`;

var Escena = function Escena(props) {
    return <p>{props.scene}</p>;}

export {Escena,Section}