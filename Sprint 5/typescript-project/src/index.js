  async function callAPI() {
    const response = await fetch("http://icanhazdadjoke.com", {
  headers: {
    Accept: "application/json",
  },
});
    const joke = await response.json();
    console.log(joke.joke);
  }