// npx tsc -w
// Have an initial text
interface jokeArray {
  id: string;
  joke: string;
  status: number;
}
var jokes: jokeArray = {
  id: "initial",
  joke: "Click to get a joke",
  status: 0,
};
const jokeText = document.getElementById("jokeText");
jokeText!.textContent = jokes.joke;
// Get a joke button
async function callAPI() {
  const response = await fetch("http://icanhazdadjoke.com", {
    headers: {
      Accept: "application/json",
    },
  });
  jokes = await response.json();
  console.log("jokes:", jokes);
  // Exercise 2 Introduce the joke into the HTML
  const jokeText = document.getElementById("jokeText");
  jokeText!.textContent = jokes.joke;
}
// Exercise 3 score the jokes and store the ratings in reportAcudits
var reportAcudits: Array<{ date: string; score: number; joke: string }> = [];

function scoreJokes(score: number) {
  var currentTime = new Date();
  // Save the date in ISO format
  var currentTimeISO = currentTime.toISOString();
  var currentScore = {
    date: currentTimeISO,
    score: score,
    joke: jokes.joke,
  };
  reportAcudits.push(currentScore);
  console.log("reportAcudits: ", reportAcudits);
}

// Exercise 4 Weather API
function weatherBalloon(cityID: number) {
  var key = "f64d7d3329a5664ff9a9775c3854eaa5"; // "Password from the openweathermap account"
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?id=" +
      cityID +
      "&appid=" +
      key
  )
    // Convert data to json
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      console.log('data',data);
      // Get the current weather
      const currentWeather = data.weather[0].main;
      // Insert it in the HTML
  const weatherText = document.getElementById("weather");
  weatherText!.textContent = currentWeather;
    });
}
// Execute on load
window.onload = function () {
// With the city ID for Barcelona
  weatherBalloon(3128760);
};