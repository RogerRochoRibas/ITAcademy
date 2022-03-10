import {Escena} from './components/escena/escena.js';
import {data} from './components/escena/data.js';
import './App.css';

function App() {
  return (
    <div className="App">
          <Escena
          scene = {data[0]}/>
          
          <Escena
          scene = {data[1]}/>
          
          <Escena
          scene = {data[2]}/>
          
          <Escena
          scene = {data[3]}/>
    </div>
  );
}

export default App;
