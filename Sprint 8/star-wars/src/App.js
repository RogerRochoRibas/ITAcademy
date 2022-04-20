import './App.css';
import React from 'react'
import axios from 'axios'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Welcome from './welcome'
import Main from './main'

function App() {
  const [Ships,setShips] = React.useState([]);
  const [url,setURL] = React.useState(`https://swapi.dev/api/starships/`);

  React.useEffect(()=>{
    async function getShips() {
      let res = await fetch(url)
      let data = await res.json();
      do {
        setShips(data.results);
        setURL(data.next);
      } while(data.next!==null)
    }
    getShips();
    },[Ships,url])

  return (
    <div className="App">
      {Ships && Ships.map((ship,i) => {
        return(
          <h1 key={i}>
            {ship.name}
          </h1>
        );
      })}
    </div>
    /*<Router>
      <Routes>
      <Route path='/' element={<Welcome/>}/>
      <Route path='app' element={<Main ShipsList={ShipsList}/>}/>
      </Routes>
    </Router>*/
  );
}

export default App;
