// Get references to the timer and button elements
var timer = document.getElementById("timer");
var startButton = document.getElementById("start");
var stopButton = document.getElementById("stop");
var resetButton = document.getElementById("reset");

// Initialize variables for tracking the start time, elapsed time, and timer interval
var startTime,
  elapsedTime = 0,
  timerInterval;

// Function to start the timer
function startTimer() {
  // Calculate the start time by subtracting the elapsed time from the current time
  startTime = Date.now() - elapsedTime;

  // Start an interval that updates the timer display every 10 milliseconds
  timerInterval = setInterval(function printTime() {
    // Calculate the elapsed time by subtracting the start time from the current time
    elapsedTime = Date.now() - startTime;

    // Update the timer display with the formatted elapsed time
    timer.textContent = formatTime(elapsedTime);
  }, 10);

  // Disable the start button and enable the stop button
  startButton.disabled = true;
  stopButton.disabled = false;
}

// Function to stop the timer
function stopTimer() {
  // Clear the interval that updates the timer display
  clearInterval(timerInterval);

  // Enable the start button and disable the stop button
  startButton.disabled = false;
  stopButton.disabled = true;
}

// Function to reset the timer
function resetTimer() {
  // Clear the interval that updates the timer display
  clearInterval(timerInterval);

  // Reset the elapsed time to 0 and update the timer display
  elapsedTime = 0;
  timer.textContent = "00:00:00";

  // Enable the start button and disable the stop button
  startButton.disabled = false;
  stopButton.disabled = true;
}

// Function to format the elapsed time as a string
function formatTime(time) {
  var hours = Math.floor(time / (1000 * 60 * 60));
  var minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((time % (1000 * 60)) / 1000);
  var milliseconds = Math.floor((time % 1000) / 10);
  //   The ternary operator hours ? (hours > 9 ? hours : "0" + hours) : "00" checks if the hours variable has a value greater than zero. If it does, it checks if it is greater than 9. If it is, it returns the value of hours. If it is less than or equal to 9, it adds a leading zero to the hours value and returns it. If hours is zero, it returns the string "00".

  // The same logic is applied to format the minutes and seconds values.
  return (
    (hours ? (hours > 9 ? hours : "0" + hours) : "00") +
    ":" +
    (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") +
    ":" +
    (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00") +
    "." +
    (milliseconds > 9 ? milliseconds : "0" + milliseconds)
  );
}

// Add event listeners to the button elements to trigger the timer functions
startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);
