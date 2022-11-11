const getBTN = document.getElementById("btn");
const animeBox = document.querySelector(".anime-box");
const anime = document.querySelector(".anime");
const animeName = document.querySelector(".hero-name");

const api_url = `https://api.catboys.com/img`;

getBTN.addEventListener("click", async function () {
  const response = await fetch(api_url);
  const data = await response.json();
  anime.src = data.url;
  animeBox.style.display = "block";
  animeName.textContent = data.artist;
});
