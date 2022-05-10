import React from "react";
import { Link } from "react-router-dom";
import App from "./App";
export const ShipRender = ({ loggedIn, loadMoreShips, ships }) => {
  React.useEffect(() => {
    loadMoreShips();
  }, []);

  window.onscroll = function () {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      loadMoreShips();
    }
  };

  function shipList() {
    if (ships.length > 0) {
      let shipsMounted = ships.map((element, index) => {
        return (
          <li key={index}>
            <Link to={`/starships/${parseInt(index) + 1}`}>
              <div>
                <h3 className="shipName ship">{element.name}</h3>
                <h4 className="shipModel ship">{element.model}</h4>
              </div>
            </Link>
          </li>
        );
      });
      return shipsMounted;
    }
  }

  const loading = <p>Loading...</p>;
  if (loggedIn) {
  return (
    <>
      <h2 class="title">Spaceships</h2>
      <ul className="starships">{ships.length > 0 ? shipList() : loading}</ul>
    </>
  );}
  if (!loggedIn) {
    return (<p>You must login to see the Spaceships.</p>)
  }
};
