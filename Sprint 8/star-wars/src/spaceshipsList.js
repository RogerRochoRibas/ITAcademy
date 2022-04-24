import React from 'react'


export function ShipRender() {
    const [ships, setShips] = React.useState([]);
    React.useEffect(() => {
      fetch("https://swapi.dev/api/starships/")
        .then((response) => response.json())
        .then((ship) => {
          setShips(ship.results);
          console.log('ship: ', ship.results)
        });
    }, []);

    const shipList = () => {
        if(ships.length > 0) {
            let shipsMounted = ships.map((element) => {
                    return(<li><h3 className='shipName ship'>{element.name}</h3><p className='shipModel ship'>{element.model}</p></li>)
            })
            return shipsMounted;
        }      
    }

    const loading = (<p>Loading...</p>)

    return (
    <>
        <h2>Spaceships</h2>
        <ul className='starships'>{ships.length > 0? shipList() : loading}</ul> 
    </>)
}
