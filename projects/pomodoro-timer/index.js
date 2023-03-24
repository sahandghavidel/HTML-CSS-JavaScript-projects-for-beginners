const startEl = document.getElementById("start");
const stopEl = document.getElementById("stop");
const resetEl = document.getElementById("reset");
const timerEl = document.getElementById("timer");

let intervalId;
let timeLeft = 1500; // 25 minutes in seconds

function updateTimer() {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  let formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
  // padStart() is a built-in method in JavaScript that allows you to pad a string with another string until it reaches a specified length. It's often used to format strings to a specific length, such as adding leading zeros to a number.
  //   const str = '7';
  // const paddedStr = str.padStart(2, '0');

  // console.log(paddedStr); // Output: '07'

  timerEl.innerHTML = formattedTime;
}

function startTimer() {
  intervalId = setInterval(() => {
    timeLeft--;
    updateTimer();
    if (timeLeft === 0) {
      clearInterval(intervalId);
      alert("Time's up!");
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(intervalId);
}

function resetTimer() {
  clearInterval(intervalId);
  timeLeft = 1500;
  updateTimer();
}

startEl.addEventListener("click", startTimer);
stopEl.addEventListener("click", stopTimer);
resetEl.addEventListener("click", resetTimer);
