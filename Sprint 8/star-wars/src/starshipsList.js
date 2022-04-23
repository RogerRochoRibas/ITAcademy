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
                    return(<li><h3 className='shipName ship'>{element.name}</h3><p className='shipModel ship'>{element.model}</p></li>)
            })
            console.log('ships is not null: ', ships)
            return shipsMounted;
        }      
    }

    const loading = (<p>Cargando....</p>)

    return (
    <>
        <h2>Starships</h2>
        <ul className='starships'>{ships.length > 0? shipList() : loading}</ul> 
    </>)
}
