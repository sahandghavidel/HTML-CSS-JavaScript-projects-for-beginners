const btnEl = document.getElementById("btn");
const animeContainerEl = document.querySelector(".anime-container");
const animeImgEl = document.querySelector(".anime-img");
const amineNameEl = document.querySelector(".anime-name");

btnEl.addEventListener("click", async function () {
  try {
    btnEl.disabled = true;
    btnEl.innerText = "Loading...";
    amineNameEl.innerText = "Updating...";
    animeImgEl.src = "spinner.svg";
    const response = await fetch("https://api.catboys.com/img");
    const data = await response.json();
    btnEl.disabled = false;
    btnEl.innerText = "Get Anime";
    animeContainerEl.style.display = "block";
    animeImgEl.src = data.url;
    amineNameEl.innerText = data.artist;
  } catch (error) {
    console.log(error);
    btnEl.disabled = false;
    btnEl.innerText = "Get Anime";
    amineNameEl.innerText = "An error happened, please try again";
  }
});
