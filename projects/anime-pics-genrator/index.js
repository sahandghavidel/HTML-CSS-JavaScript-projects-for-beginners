const btnEl = document.getElementById("btn");
const animeBoxEl = document.querySelector(".anime-container");
const animeImgEl = document.querySelector(".anime-img");
const animeNameEl = document.querySelector(".anime-name");

btnEl.addEventListener("click", async function () {
  try {
    btnEl.disabled = true;
    btnEl.innerText = "Loading...";
    animeNameEl.innerText = "Updating...";
    animeImgEl.src = "spinner.svg";
    const response = await fetch("https://api.catboys.com/img");
    const data = await response.json();
    animeImgEl.src = data.url;

    animeBoxEl.style.display = "block";
    animeNameEl.innerText = data.artist;
    btnEl.disabled = false;
    btnEl.innerText = "Get Anime";
  } catch (error) {
    console.log(error);
    btnEl.disabled = false;
    btnEl.innerText = "Get Anime";
    animeNameEl.innerText = "An error happened, try again";
  }
});
