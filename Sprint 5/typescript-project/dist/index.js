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
// npx tsc -w
// Have an initial text
var jokes = 'Click to get a joke';
const jokeText = document.getElementById('jokeText');
jokeText.textContent = jokes;
// Get a joke button
function callAPI() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch("http://icanhazdadjoke.com", {
            headers: {
                Accept: "application/json",
            },
        });
        jokes = yield response.json();
        // Exercise 2 Introduce the joke into the HTML
        const jokeText = document.getElementById('jokeText');
        jokeText.textContent = jokes.joke;
        console.log(jokes.joke);
    });
}
// Exercise 3 score the jokes and store the ratings in reportAcudits
var reportAcudits = [];
function scoreJokes(score) {
    var currentTime = new Date();
    var currentTimeISO = currentTime.toISOString();
    var currentScore = {
        date: currentTimeISO,
        score: score,
        joke: jokes.joke
    };
    reportAcudits.push(currentScore);
    console.log(reportAcudits);
}
//# sourceMappingURL=index.js.map