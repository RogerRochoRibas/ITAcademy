import React from "react";
import { useParams } from "react-router-dom";
import App from "./App";

export function SpaceshipMovies(props) {
  const id = useParams();
  const idNumber = parseInt(id.name) - 1;
  const moviesURLs = props.ships[idNumber].films;
  const [movieList, setMovieList] = React.useState([]);

  const getMovies = async (moviesURLs) => {
    let newMovieList = [];
    let arrayLength = moviesURLs.length;
    for (let i = 0; i < arrayLength; i++) {
      const data = await fetch(moviesURLs[i]);
      const dataJson = await data.json();
      newMovieList[i] = dataJson;
      setMovieList(newMovieList);
    }
  };

  React.useEffect(() => {
    getMovies(moviesURLs);
    props.loadMoreShips();
  }, []);

  if (props.loggedIn) {
    if (movieList.length > 0) {
      let moviesMounted = movieList.map((element, index) => {
        return (
          <><tr className="tableSpace">
            <td></td>
          </tr>
            <tr className="pilotHead">
              <td>
                <h3 className="pilotname">
                  {index + 1}. {element.title}
                </h3>
              </td>
            </tr>
            <tr>
              <td>
                <p>Director: {element.director}</p>
              </td>
              <td>
                <p>Episode Number: {element.episode_id}</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>Release Date: {element.release_date}</p>
              </td>
              <td>
                <p>Producer: {element.producer}</p>
              </td>
            </tr>
          </>
        );
      });
      return moviesMounted;
    }
  }
}
