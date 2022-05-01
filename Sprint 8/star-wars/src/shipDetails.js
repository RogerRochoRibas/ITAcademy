import React from 'react'


export function ShipDetails(element) {
    const [currentShip, setCurrentShip] = React.useState([]);
    return <div className={'shipDetails'} id={element.name.replace(/ /g,'')}> 
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
}