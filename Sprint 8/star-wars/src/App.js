import "./App.css";
import React from "react";
import { ShipRender } from "./spaceshipsList.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Welcome from "./welcome";
import { RegisterLogin } from "./registerLogin";
import logo from "./sw-logo.png";
import { Link } from "react-router-dom";
import { StarshipDetails } from "./starshipDetails";

function App() {
  const [ships, setShips] = React.useState([]);
  const [next, setNext] = React.useState(
    "https://swapi.dev/api/starships/?page=1"
  );
  function loadMoreShips() {
    if (next) {
      fetch(next)
        .then((response) => response.json())
        .then((ship) => {
          setNext(ship.next);
          let newShips = [...ships];
          newShips.push(...ship.results);
          setShips(newShips);
        });
    }
  }

  return (
    <>
    <Router className="App">
      <header><img alt="logo" id="logo" src={logo} /></header>
      <div class="nav-log"><RegisterLogin/></div>
	    <div class="nav">
	    <ul>
	      <li><Link to="/">Home</Link></li>
	      <li><Link to='app'>Spaceships</Link></li>
	    </ul>
      </div>
      <Routes>
        <Route path="/starships/:name" element={<StarshipDetails ships={ships} loadMoreShips={loadMoreShips}/>}></Route>
        <Route path="/" element={<Welcome />} />
        <Route path="app" element={<ShipRender ships={ships} loadMoreShips={loadMoreShips}/>}/>
      </Routes>
    </Router></>
  );
}

export default App;
