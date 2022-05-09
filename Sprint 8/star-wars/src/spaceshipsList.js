import React from "react";
import {Link} from 'react-router-dom';
import App from "./App";

export const ShipRender = ({Login,loadMoreShips,ships}) => {
  let logged = Login['loggedIn']
  
  React.useEffect(() => {
    loadMoreShips();
  }, []);
  
  window.onscroll = function() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        loadMoreShips();
    }
};

  function shipList() {
    if (ships.length > 0) {
      let shipsMounted = ships.map((element, index) => {
        return (
          <li key={index}>
            <Link to={`/starships/${parseInt(index)+1}`}>
            <div>
              <h3 className="shipName ship">{element.name}</h3>
              <h4 className="shipModel ship">{element.model}</h4>
            </div>
            </Link>
          </li>
        );
      });
      if (localStorage.getItem("loggedIn")) {return shipsMounted;} else {return <p>You must Log In to see the spaceships.</p>}
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
