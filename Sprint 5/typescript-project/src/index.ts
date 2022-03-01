// npx tsc -w
// Have an initial text
var jokes = 'Click to get a joke';
const jokeText = document.getElementById('jokeText');
jokeText!.textContent = jokes;
// Get a joke button
async function callAPI() {
  const response = await fetch("http://icanhazdadjoke.com", {
    headers: {
      Accept: "application/json",
    },
  });
  jokes = await response.json();
  // Exercise 2 Introduce the joke into the HTML
  const jokeText = document.getElementById('jokeText');
  jokeText!.textContent = jokes.joke;
  console.log(jokes.joke);
}
// Exercise 3 score the jokes and store the ratings in reportAcudits
var reportAcudits:Array<{date:string,score:number,joke:string}> = [
]

function scoreJokes(score:number) {
  var currentTime = new Date();
  var currentTimeISO = currentTime.toISOString()
  var currentScore = {
      date: currentTimeISO,
      score: score,
      joke: jokes.joke
  };
  reportAcudits.push(currentScore);
  console.log(reportAcudits)
}
