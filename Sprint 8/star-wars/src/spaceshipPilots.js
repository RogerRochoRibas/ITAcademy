import React from "react";
import { useParams } from "react-router-dom";
import App from "./App";

export function SpaceshipPilots(props) {
  const id = useParams();
  const idNumber = parseInt(id.name) - 1;
  const pilotsURLs = props.ships[idNumber].pilots;
  const [pilotList, setPilotList] = React.useState([]);

  const getPilots = async (pilotsURLs) => {
    let newPilotList = [];
    let arrayLength = pilotsURLs.length;
    for (let i = 0; i < arrayLength; i++) {
      const data = await fetch(pilotsURLs[i]);
      const dataJson = await data.json();
      newPilotList[i] = dataJson;
      setPilotList(newPilotList);
    }
  };

  React.useEffect(() => {
    getPilots(pilotsURLs);
    props.loadMoreShips();
  }, []);

  if (props.loggedIn) {
    if (pilotList.length > 0) {
      let pilotsMounted = pilotList.map((element, index) => {
        return (
          <>
            <tr className="tableSpace">
              <td></td>
            </tr>
            <tr className="pilotHead">
              <td>
                <h3 className="pilotname">
                  {index + 1}. {element.name}
                </h3>
              </td>
            </tr>
            <tr>
              <td>
                <p>Height: {element.height}</p>
              </td>
              <td>
                <p>Weight: {element.mass}</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>Eye Color: {element.eye_color}</p>
              </td>
              <td>
                <p>Hair Color: {element.hair_color}</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>Gender: {element.gender}</p>
              </td>
              <td>
                <p>Skin Color: {element.skin_color}</p>
              </td>
            </tr>
          </>
        );
      });
      return pilotsMounted;
    }
  }
}
