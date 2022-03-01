// npx tsc -w
async function callAPI() {
  const response = await fetch("http://icanhazdadjoke.com", {
    headers: {
      Accept: "application/json",
    },
  });
  const joke = await response.json();
  const jokeText = document.getElementById('jokeText');
  jokeText!.textContent = joke.joke;
  console.log(joke.joke);
}
