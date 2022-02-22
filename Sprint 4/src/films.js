// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
    let result = array.map(moviesArray => {
        return moviesArray.director
    });
    console.log("EXERCICE 1 ->", result);
    return result;
}

// Exercise 2: Get the films of a certain director

function getMoviesFromDirector(array, director) {
    var moviesFromDirector = 
    array.filter((array) => array.director == director);
    return moviesFromDirector
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
var initialValue = 0;
// Find the director's movies
var moviesFromDirector = array.filter((array) => array.director == director);
// Get the movie's Scores
var moviesFromDirectorScore = moviesFromDirector.map(obj => { return obj.score});
// Average the Scores
var totalScore = averageScore => averageScore.reduce(
(previousValue, currentValue) => previousValue + currentValue, initialValue) / averageScore.length;
// Round the number to 2 decimals
var averageScore = totalScore(moviesFromDirectorScore).toFixed(2);
// Return a Number
return parseFloat(averageScore)
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {

}

// Exercise 5: Order by year, ascending
function orderByYear() {

}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
    module.exports = {
        getAllDirectors,
        getMoviesFromDirector,
        moviesAverageOfDirector,
        orderAlphabetically,
        orderByYear,
        moviesAverageByCategory,
        hoursToMinutes,
        bestFilmOfYear,
    };
}