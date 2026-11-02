const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

const questionEl = document.getElementById("question");
const inputEl = document.getElementById("input");
const formEl = document.getElementById("form");
const scoreEl = document.getElementById("score");
const feedbackEl = document.getElementById("feedback");

let score = JSON.parse(localStorage.getItem("score")) || 0;

scoreEl.innerText = `score: ${score}`;
questionEl.innerText = `What is ${num1} multiply by ${num2}?`;

const correctAns = num1 * num2;

// Show the result of the previous question (if any), then clear it
const lastResult = JSON.parse(localStorage.getItem("lastResult"));
if (lastResult) {
  feedbackEl.innerText = lastResult.message;
  feedbackEl.classList.add(lastResult.isCorrect ? "correct" : "wrong");
  localStorage.removeItem("lastResult");
}

formEl.addEventListener("submit", () => {
  const userAns = +inputEl.value;
  const isCorrect = userAns === correctAns;
  let message;

  if (isCorrect) {
    score++;
    message = ` Correct! ${num1} × ${num2} = ${correctAns}`;
  } else {
    score--;
    message = ` Wrong! ${num1} × ${num2} = ${correctAns}`;
  }

  localStorage.setItem("score", JSON.stringify(score));
  localStorage.setItem("lastResult", JSON.stringify({ isCorrect, message }));
});const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

const questionEl = document.getElementById("question");

const inputEl = document.getElementById("input");

const formEl = document.getElementById("form");

const scoreEl = document.getElementById("score");

let score = JSON.parse(localStorage.getItem("score"));

if (!score) {
  score = 0;
}

scoreEl.innerText = `score: ${score}`;

questionEl.innerText = `What is ${num1} multiply by ${num2}?`;

const correctAns = num1 * num2;

formEl.addEventListener("submit", () => {
  const userAns = +inputEl.value;
  if (userAns === correctAns) {
    score++;
    updateLocalStorage();
  } else {
    score--;
    updateLocalStorage();
  }
});

function updateLocalStorage() {
  localStorage.setItem("score", JSON.stringify(score));
}
