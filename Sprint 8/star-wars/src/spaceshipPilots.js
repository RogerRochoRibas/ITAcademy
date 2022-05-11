import React from "react";
import { useParams } from 'react-router-dom';
import App from "./App";

export function SpaceshipPilots(props) {
    const id = useParams();
    const idNumber = parseInt(id.name)-1;
    const pilotsURLs = props.ships[idNumber].pilots
    const [pilotList, setPilotList] = React.useState([]);
    let list = []
    
    async function loadPilots() {
        console.log('pilotsURLs: ',pilotsURLs)
        console.log('pilots length: ',pilotsURLs.length)
        pilotsURLs.forEach(url => {
            fetch(url)
            .then((response) => response.json())
            .then((pilot) => {
                let newPilotList = [...pilotList];
                newPilotList.push(pilot)
                setPilotList(newPilotList)
            })
        })
    }
    React.useEffect(() => {
        console.log('useEffect load Pilots')
        loadPilots();
      }, []);

    /*
  function loadMoreShips() {
    if (next) {
      fetch(next)
        .then((response) => response.json())
        .then((ship) => {
          setNext(ship.next);
          let newShips = [...ships];
          newShips.push(...ship.results);
          setShips(newShips);
          console.log(ship.results[1].films)
          console.log(ship.results[1].pilots)
        });
    }
  }*/
    
    if (props.loggedIn) {
    return <div className='details'>
                <h2 className='title'>{props.ships[idNumber].name}</h2>
                <button onClick={()=>console.log('pilotList',pilotList)}>pilotList</button>
                <img alt='the starship in space' src={`https://starwars-visualguide.com/assets/img/starships/1.jpg`}></img>
                <table>
                    <tbody>
                        <tr>
                            <td><p>Cost: {props.ships[idNumber].cost_in_credits}</p></td>
                            <td><p>Cargo: {props.ships[idNumber].cargo_capacity}</p></td>
                        </tr>
                    </tbody>
                </table>
            </div>} else {return <p>You must Log In to see the pilots.</p>}
/*
function PilotList() {
    if (pilots.length > 0) {
      let pilotsMounted = pilots.map((element, index) => {
        return (
          <li key={index}>
            <Link to={`/starships/${parseInt(index) + 1}`}>
              <div className="ship-card">
                <div className="ship">
                <h3 className="shipName">{element.name}</h3>
                <h4 className="shipModel">{element.model}</h4>
                </div>
                <img className="small-image" alt={element.name} src={`https://starwars-visualguide.com/assets/img/starships/${index+6}.jpg`}></img>
              </div>
            </Link>
          </li>
        );
      });
      return shipsMounted;
    }
  }*/
}