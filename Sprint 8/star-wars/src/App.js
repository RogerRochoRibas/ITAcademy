import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { ShipRender } from "./spaceshipsList.js";
import Welcome from "./welcome";
import { RegisterLogin } from "./registerLogin";
import logo from "./sw-logo.png";
import { SpaceshipDetails } from "./spaceshipDetails";

function App() {
  const [loggedIn, setLogedIn] = React.useState(
    localStorage.getItem("loggedIn")
  );
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

  function init() {
    let loged = localStorage.getItem("loggedIn");
    if (loged) {
      setLogedIn(loged);
    }
  }

  React.useEffect(() => {
    init();
  }, []);

  return (
    <>
      <Router className="App">
        <header>
          <img alt="logo" id="logo" src={logo} />
        </header>
        <div>
          <RegisterLogin loggedIn={loggedIn} setLogedIn={setLogedIn} />
        </div>
        <div class="nav">
          <ul>
            <li key='home'>
              <Link to="/">Home</Link>
            </li>
            <li key='Spaceships'>
              <Link to="app">Spaceships</Link>
            </li>
          </ul>
        </div>
        <Routes>
          <Route
            path="/starships/:name"
            element={
              <SpaceshipDetails
                loggedIn={loggedIn}
                ships={ships}
                loadMoreShips={loadMoreShips}
              />
            }
          ></Route>
          <Route path="/" element={<Welcome />} />
          <Route
            path="app"
            element={
              <ShipRender
                loggedIn={loggedIn}
                ships={ships}
                loadMoreShips={loadMoreShips}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
