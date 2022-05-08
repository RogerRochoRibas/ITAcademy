import React from "react";
import { useParams } from 'react-router-dom';
import App from "./App";

export function StarshipDetails(props) {
    const id = useParams();
    const idNumber = parseInt(id.name)-1;
    const imgNumber = parseInt(id.name)+5;
    if (props.loggedIn) {
    return <div className='details'>
                <h2 className='title'>{props.ships[idNumber].name}</h2>
                <img src={`https://starwars-visualguide.com/assets/img/starships/${imgNumber}.jpg`}></img>
                <table>
                    <tbody>
                        <tr>
                            <td><p>Cost: {props.ships[idNumber].cost_in_credits}</p></td>
                            <td><p>Cargo: {props.ships[idNumber].cargo_capacity}</p></td>
                        </tr>
                        <tr>
                            <td><p>Lenght: {props.ships[idNumber].length}</p></td>
                            <td><p>Crew: {props.ships[idNumber].crew}</p></td>
                        </tr>
                        <tr>
                            <td><p>Passengers: {props.ships[idNumber].passengers}</p></td>
                            <td><p>Consumables: {props.ships[idNumber].consumables}</p></td>
                        </tr>
                        <tr>
                            <td><p>Max Atmosphering Speed: {props.ships[idNumber].max_atmosphering_speed}</p></td>
                            <td><p>Hyperdrive Rating: {props.ships[idNumber].hyperdrive_rating}</p></td>
                        </tr>
                        <tr>
                            <td><p>Manufacturer: {props.ships[idNumber].manufacturer}</p></td>
                        </tr>
                    </tbody>
                </table>
            </div>} else {return <p>You must Log In to see the starships.</p>}
}