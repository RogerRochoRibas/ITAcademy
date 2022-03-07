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
const initialValue = 0;
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
    // Get the titles
    let titles = array.map(moviesArray => {
        return moviesArray.title
    });
    // Sort them alphabetically
    let sortedTitles = [...titles].sort();
    // Get the first 20 if there are more
    let sorted20Titles = sortedTitles.slice(0,20);
    return sorted20Titles
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
    const sorter = (a,b) => {
        // If the year is not the same, order by year
        if (a.year !== b.year) {
            return a.year - b.year
        } 
        // If the year is the same, order by title
        else {
            var titleA = a.title.toUpperCase() // To ignore upper and lower case
            var titleB = b.title.toUpperCase()
            if (titleA < titleB) {return -1}
            if (titleA > titleB) {return 1}
        }
    }
    sortedArray = [...array].sort(sorter);
    return sortedArray
}


// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {
    // Filter out movies without a score
    var moviesWithScore = array.filter(movie => movie.score !=='')
    // Get movies from the Genre
    var moviesCorrectGenre = moviesWithScore.filter(movie => movie.genre.includes(genre))
    // Get the movie's Scores
    var moviesFromGenreScore = moviesCorrectGenre.map(movie => { return movie.score});
    // Create the function to average the Scores
    var totalScore = averageScore => averageScore.reduce(
    (previousValue, currentValue) => previousValue + currentValue, 0) / averageScore.length;
    // Apply the function to average, and round the number to 2 decimals (toFixed)
    var averageScore = totalScore(moviesFromGenreScore).toFixed(2);
    // Return a Number
    averageScoreNumber = parseFloat(averageScore);
    return parseFloat(averageScoreNumber)
}

// Exercise 7: Modify the duration of movies to minutes
const hoursToMinutes = (movies) => {
    let result = movies.map((movie) => {
        let stringDuration = movie.duration;
        let indexHours = stringDuration.indexOf('h');
        console.log('indexHours: ',indexHours)
        let indexMinutes = stringDuration.indexOf('min');
        console.log('indexMinutes: ',indexMinutes)
        let hours = parseInt(stringDuration.substring(0, indexHours).trim());
        let minutes = 0;
        if (stringDuration.indexOf('min') !== -1) {
            minutes = parseInt(stringDuration.substring(indexHours + 1, indexMinutes + indexHours + 1).trim());
        }
        let newDuration = {
            duration: hours * 60 + minutes
        };
        return newDuration;
    });
    return result;
};

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
// Filter the movies by year
let moviesOfYear = array.filter(movie => movie.year == year)
// Make an array with the movies scores
let moviesYearScores = moviesOfYear.map((movie) => {return movie.score})
// Look for the highest score in the array
let bestScore; 
bestScore = moviesYearScores.reduce((best,movie) => (movie.score > best ? movie.score:best));
// Get the film with the best score
let bestMovieOfTheYear = moviesOfYear.filter(movie => movie.score == bestScore)
return bestMovieOfTheYear;
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