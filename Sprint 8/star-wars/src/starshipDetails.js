import React from "react";
import { useParams } from 'react-router-dom';

export function StarshipDetails() {
    const id = useParams();
    const idNumber = parseInt(id.name)+1;

    const [shipURL, setShipURL] = React.useState(`https://swapi.dev/api/starships/${idNumber}`)
    const [shipData, setShipData] = React.useState([])
    const obtainShip = async () => {
        const currentShip = await fetch(shipURL)
        const currentShipData = await currentShip.json()
        setShipData(currentShipData)
    }
    React.useEffect(() => {
        obtainShip();
    },[])

    return <div className='details' id={shipData.name}>
                <h2 className='title'>{shipData.name}</h2>
                <img src={`https://starwars-visualguide.com/assets/img/starships/${idNumber}.jpg`}></img>
                <table>
                    <tbody>
                        <tr>
                            <td><p>Cost: {shipData.cost_in_credits}</p></td>
                            <td><p>Cargo: {shipData.cargo_capacity}</p></td>
                        </tr>
                        <tr>
                            <td><p>Lenght: {shipData.length}</p></td>
                            <td><p>Crew: {shipData.crew}</p></td>
                        </tr>
                        <tr>
                            <td><p>Passengers: {shipData.passengers}</p></td>
                            <td><p>Consumables: {shipData.consumables}</p></td>
                        </tr>
                        <tr>
                            <td><p>Max Atmosphering Speed: {shipData.max_atmosphering_speed}</p></td>
                            <td><p>Hyperdrive Rating: {shipData.hyperdrive_rating}</p></td>
                        </tr>
                        <tr>
                            <td><p>Manufacturer: {shipData.manufacturer}</p></td>
                        </tr>
                    </tbody>
                </table>
            </div>
}