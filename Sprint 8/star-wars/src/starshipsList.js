import React from 'react'


export function ShipRender() {
    const [ships, setShips] = React.useState([]);
    React.useEffect(() => {
      fetch("https://swapi.dev/api/starships/")
        .then((response) => response.json())
        .then((ship) => {
          setShips(ship.results); // Guardar datos
          console.log('ship: ', ship.results)
        });
    }, []);

    const shipList = () => {
        if(ships.length > 0) {
            let shipsMounted = ships.map((element) => {
                    return(<li>Ship: {element.name} Model: {element.model}</li>)
            })
            console.log('ships is not null: ', ships)
            return shipsMounted;
        }      
    }

    const loading = (<p>Cargando....</p>)

    return (
    <>
        <p>hola</p>
        <div>{ships.length > 0? shipList() : loading}</div> 
        ___________
        <div>{ships.length > 0 && shipList()}</div>

        ___________
        <div>{ships.length <= 0 || shipList()}</div>

        ___________
        <div>{!ships.length <= 0 && shipList()}</div>
    </>)
}
