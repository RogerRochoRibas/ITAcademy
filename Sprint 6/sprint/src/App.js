import React from "react";
import styled from "styled-components";
import {Escena, Section} from './components/escena/escena.js';
import {data} from './components/escena/data.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Section>
          <Escena
          scene = {data[0]}/>
      </Section>
          
      <Section>
          <Escena
          scene = {data[1]}/>
      </Section>
          
      <Section>
          <Escena
          scene = {data[2]}/>
      </Section>
          
      <Section>
          <Escena
          scene = {data[3]}/>
      </Section>
    </div>
  );
}

export default App;
