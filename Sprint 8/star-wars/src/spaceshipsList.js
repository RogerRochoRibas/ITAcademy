import React from "react";
import classNames from "classnames";
import { ButtonStyle } from "./inputs";
import ReactPaginate from 'react-paginate';

export function ShipRender() {
  const [ships, setShips] = React.useState([]);
  const [details, setDetails] = React.useState([]);
  const [next, setNext] = React.useState("https://swapi.dev/api/starships/?page=1")
  
  React.useEffect(() => {
    fetch(next)
      .then((response) => response.json())
      .then((ship) => {
        console.log(ship)
        setShips(ship.results);
        setNext(ship.next);
      })
  }, []);

  function loadMoreShips() {
    if(next) {
    fetch(next)
      .then((response) => response.json())
      .then((ship) => {
        setNext(ship.next);
        setShips(ship.results);
      })}
  }

  const shipList = () => {
    if (ships.length > 0) {
      let shipsMounted = ships.map((element) => {
        let active = details === element.name;
        return (
          <li key={element.name}>
            <div onClick={(e) => {if(details==element.name){setDetails([])} else{setDetails(element.name)}}}>
              <h3 className="shipName ship">{element.name}</h3>
              <h4 className="shipModel ship">{element.model}</h4>
            </div>
            <div
              className={classNames({
                shipDetailsShow: active,
                shipDetails: true,
              })}
              id={element.name.replace(/ /g, "")}
            >
                <table>
                    <tbody>
                        <tr>
                            <td><p>Cost: {element.cost_in_credits}</p></td>
                            <td><p>Cargo: {element.cargo_capacity}</p></td>
                        </tr>
                        <tr>
                            <td><p>Lenght: {element.length}</p></td>
                            <td><p>Crew: {element.crew}</p></td>
                        </tr>
                        <tr>
                            <td><p>Passengers: {element.passengers}</p></td>
                            <td><p>Consumables: {element.consumables}</p></td>
                        </tr>
                        <tr>
                            <td><p>Max Atmosphering Speed: {element.max_atmosphering_speed}</p></td>
                            <td><p>Hyperdrive Rating: {element.hyperdrive_rating}</p></td>
                        </tr>
                        <tr>
                            <td><p>Manufacturer: {element.manufacturer}</p></td>
                        </tr>
                    </tbody>
                </table>
            </div>
          </li>
        );
      });
      return shipsMounted;
    }
  };

  const loading = <p>Loading...</p>;

  return (
    <>
      <h2>Spaceships</h2>
      <ButtonStyle onClick={loadMoreShips}>View More</ButtonStyle>
      <ul className="starships">{ships.length > 0 ? shipList() : loading}</ul>
      <ButtonStyle onClick={loadMoreShips}>View More</ButtonStyle>
    </>
  );
}
