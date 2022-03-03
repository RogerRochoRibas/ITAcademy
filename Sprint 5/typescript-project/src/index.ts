// npx tsc -w
// Have an initial text
interface jokeArray {
  id: string;
  joke: string;
  status: number;
}
var jokes: jokeArray = {
  id: '',
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
      key +
      '&units=metric'
  )
    // Convert data to json
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      console.log('data',data);
      // Get the current weather
      const currentWeather = data.weather[0].main;
      // Insert Weather in the HTML
  const weatherIcon:any = document.getElementById("weather");
  weatherIcon.src = '../img/'+currentWeather+'.svg'
  // Get the current temperature
  const currentTemperature:number = data.main.temp
  // Insert Temprature in the HTML
  var temperature:any = document.getElementById("temperature")
  temperature.innerText = currentTemperature+'º'
    });
}
// Execute on load
window.onload = function () {
// With the city ID for Barcelona
  weatherBalloon(3128760);
};

// Exercise 5
interface chuckArray {
  icon_url:string;
  id:string;
  url:string;
  value:string;
}
var chuckJoke: chuckArray = {
  icon_url:'',
  id: '',
  value: '',
  url:'',
};
async function callChuck() {
  const response = await fetch("https://api.chucknorris.io/jokes/random", {
    headers: {
      Accept: "application/json",
    },
  });
  chuckJoke = await response.json();
  // Introduce the joke into the HTML
  const jokeText = document.getElementById("jokeText");
  jokeText!.textContent = chuckJoke.value;
}

// Call jokes randomly
function getRandomJoke() {
  var randomNumber = Math.floor(Math.random() * (3 - 1));
  // 50% you get dad joke
  if (randomNumber == 1) {
    callAPI()
  }
  // 50% you get chuck joke
  if (randomNumber == 0) {
    callChuck()
  }
}

// Exercise 6 
// Changing blobs when the new joke button is clicked
var currentBlob:number = 1;
function changeBG() {
  var blob = document.getElementById('blob');
  blob!.classList.remove('blob'+currentBlob)
  currentBlob++
  blob!.classList.add('blob'+currentBlob);  
  if (currentBlob == 7) {
    blob!.classList.remove('blob'+currentBlob)
    currentBlob = 1
    blob!.classList.add('blob'+currentBlob); 
  }
}
// Weather icons
