import React from "react";
import {Link} from 'react-router-dom';

export function ShipRender() {
  const [ships, setShips] = React.useState([]);
  const [details, setDetails] = React.useState([]);
  const [next, setNext] = React.useState("https://swapi.dev/api/starships/?page=1")
  
  React.useEffect(() => {
    loadMoreShips();
  }, []);
  
  window.onscroll = function() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        loadMoreShips();
    }
};

  function loadMoreShips() {
    if(next) {
    fetch(next)
      .then((response) => response.json())
      .then((ship) => {
        setNext(ship.next);
        let newShips = [...ships]
        newShips.push(...ship.results)
        setShips(newShips);
      })}
  }

  const shipList = () => {
    if (ships.length > 0) {
      let shipsMounted = ships.map((element, index) => {
        return (
          <li key={index}>
            <Link to={`/starships/${parseInt(index)+1}`}>
            <div onClick={(e) => {if(details===element.name){setDetails([])} else{setDetails(element.name)}}}>
              <h3 className="shipName ship">{element.name}</h3>
              <h4 className="shipModel ship">{element.model}</h4>
            </div>
            </Link>
          </li>
        );
      });
      return shipsMounted;
    }
  };

  const loading = <p>Loading...</p>;

  return (
    <>
      <h2 class='title'>Spaceships</h2>
      <ul className="starships">{ships.length > 0 ? shipList() : loading}</ul>
    </>
  );
}
