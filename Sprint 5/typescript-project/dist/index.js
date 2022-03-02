"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var jokes = {
    id: '',
    joke: "Click to get a joke",
    status: 0,
};
const jokeText = document.getElementById("jokeText");
jokeText.textContent = jokes.joke;
// Get a joke button
function callAPI() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch("http://icanhazdadjoke.com", {
            headers: {
                Accept: "application/json",
            },
        });
        jokes = yield response.json();
        console.log("jokes:", jokes);
        // Exercise 2 Introduce the joke into the HTML
        const jokeText = document.getElementById("jokeText");
        jokeText.textContent = jokes.joke;
    });
}
// Exercise 3 score the jokes and store the ratings in reportAcudits
var reportAcudits = [];
function scoreJokes(score) {
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
function weatherBalloon(cityID) {
    var key = "f64d7d3329a5664ff9a9775c3854eaa5"; // "Password from the openweathermap account"
    fetch("https://api.openweathermap.org/data/2.5/weather?id=" +
        cityID +
        "&appid=" +
        key)
        // Convert data to json
        .then(function (resp) {
        return resp.json();
    })
        .then(function (data) {
        console.log('data', data);
        // Get the current weather
        const currentWeather = data.weather[0].main;
        // Insert it in the HTML
        const weatherText = document.getElementById("weather");
        weatherText.textContent = currentWeather;
    });
}
// Execute on load
window.onload = function () {
    // With the city ID for Barcelona
    weatherBalloon(3128760);
};
var chuckJoke = {
    icon_url: '',
    id: '',
    value: '',
    url: '',
};
function callChuck() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch("https://api.chucknorris.io/jokes/random", {
            headers: {
                Accept: "application/json",
            },
        });
        chuckJoke = yield response.json();
        // Introduce the joke into the HTML
        const jokeText = document.getElementById("jokeText");
        jokeText.textContent = chuckJoke.value;
    });
}
// Call jokes randomly
function getRandomJoke() {
    var randomNumber = Math.floor(Math.random() * (3 - 1));
    // 50% you get dad joke
    if (randomNumber == 1) {
        callAPI();
    }
    // 50% you get chuck joke
    if (randomNumber == 0) {
        callChuck();
    }
}
//# sourceMappingURL=index.js.map