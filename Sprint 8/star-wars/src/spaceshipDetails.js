import React from "react";
import { useParams } from "react-router-dom";
import App from "./App";
import { SpaceshipPilots } from "./spaceshipPilots";
import { SpaceshipMovies } from "./spaceshipMovies";

export function SpaceshipDetails(props) {
  const id = useParams();
  const idNumber = parseInt(id.name) - 1;
  const imgNumber = parseInt(id.name) + 5;

  if (props.loggedIn) {
    return (
      <div className="details">
        <h2 className="title">{props.ships[idNumber].name}</h2>
        <img
          alt="the starship in space"
          src={`https://starwars-visualguide.com/assets/img/starships/${imgNumber}.jpg`}
        ></img>
        <table>
          <tbody>
            <tr>
              <td>
                <p>Cost: {props.ships[idNumber].cost_in_credits}</p>
              </td>
              <td>
                <p>Manufacturer: {props.ships[idNumber].manufacturer}</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>Lenght: {props.ships[idNumber].length}</p>
              </td>
              <td>
                <p>Cargo: {props.ships[idNumber].cargo_capacity}</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>Passengers: {props.ships[idNumber].passengers}</p>
              </td>
              <td>
                <p>Crew: {props.ships[idNumber].crew}</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  Max Atmosphering Speed:{" "}
                  {props.ships[idNumber].max_atmosphering_speed}
                </p>
              </td>
              <td>
                <p>
                  Hyperdrive Rating: {props.ships[idNumber].hyperdrive_rating}
                </p>
              </td>
            </tr>
          </tbody>
        </table>

        <table className="pilotTable">
          <thead>
            <tr>
              <th className="title">Pilots</th>
            </tr>
          </thead>
          <tbody>
            <SpaceshipPilots
              loggedIn={props.loggedIn}
              ships={props.ships}
              loadMoreShips={props.loadMoreShips}
            />
          </tbody>
        </table>
        <table className="pilotTable">
          <thead>
            <tr>
              <th className="title">Movies</th>
            </tr>
          </thead>
          <tbody>
            <SpaceshipMovies
              loggedIn={props.loggedIn}
              ships={props.ships}
              loadMoreShips={props.loadMoreShips}
            />
          </tbody>
        </table>
      </div>
    );
  } else {
    return <p>You must Log In to see the starships.</p>;
  }
}
