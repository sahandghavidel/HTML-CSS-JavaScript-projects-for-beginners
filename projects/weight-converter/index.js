const inputEl = document.getElementById("input");
const errorEl = document.getElementById("error");
const resultsEl = document.getElementById("result");

//add an event listener to the form
let time;
let errorTime;

function updateResults() {
  if (inputEl.value <= 0 || isNaN(inputEl.value)) {
    clearTimeout(errorTime);
    errorEl.innerText = "Please enter a valid number!";
    errorTime = setTimeout(function () {
      errorEl.innerText = "";
    }, 2000);
    inputEl.value = "";
  } else {
    clearTimeout(time);

    resultsEl.innerText = (+inputEl.value / 2.2).toFixed(2);
    time = setTimeout(function () {
      resultsEl.innerText = "";
      inputEl.value = "";
    }, 10000);
  }
}

inputEl.addEventListener("input", updateResults);
