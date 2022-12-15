const containerEl = document.getElementById("container"),
  searchInput = document.getElementById("input");
infoTextEl = document.getElementById("info-text");
const audioEl = document.getElementById("audio");

const meaningContainerEl = document.getElementById("meaning-container");

const titleEl = document.getElementById("title");
const meaningEl = document.getElementById("meaning");

async function fetchApi(word) {
  try {
    infoTextEl.style.display = "block";
    infoTextEl.innerText = `Searching the meaning of "${word}"`;
    meaningContainerEl.style.display = "none";
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    const result = await fetch(url).then((res) => res.json());

    if (result.title) {
      titleEl.innerText = word;
      meaningEl.innerText = "N/A";
      audioEl.style.display = "none";
    }

    const definitions = result[0].meanings[0].definitions[0];

    titleEl.innerText = result[0].word;

    meaningEl.innerText = definitions.definition;

    if (result[0].phonetics[0].audio) {
      audioEl.style.display = "inline-flex";

      audioEl.src = result[0].phonetics[0].audio;
    } else {
      audioEl.style.display = "none";
    }

    infoTextEl.style.display = "none";
    meaningContainerEl.style.display = "block";
  } catch (error) {
    console.log(error);
    infoTextEl.style.display = "none";
    meaningContainerEl.style.display = "block";
    audioEl.style.display = "none";
  }
}

searchInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter" && e.target.value) {
    fetchApi(e.target.value);
  }
});
