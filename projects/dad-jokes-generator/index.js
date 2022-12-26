const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

const apiKey = "SAXb3lrT9IIorMjQkAFWBg==KCDQCZgWgcoAU4ai";

const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
};

const apiURL = `https://api.api-ninjas.com/v1/dadjokes?limit=1`;

async function getJoke() {
  try {
    btnEl.innerText = "Loading...";
    btnEl.disabled = true;
    jokeEl.innerText = "Updating...";
    const response = await fetch(apiURL, options);
    const data = await response.json();
    const jokeContent = data[0].joke;
    jokeEl.innerText = jokeContent;
    btnEl.innerText = "Tell me a joke";
    btnEl.disabled = false;
    console.log(data);
  } catch (error) {
    console.log(error);
    jokeEl.innerText = "An error happened, try again later";
    btnEl.innerText = "Tell me a joke";
    btnEl.disabled = false;
  }
}

getJoke();

btnEl.addEventListener("click", getJoke);
