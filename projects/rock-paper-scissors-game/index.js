const buttons = document.querySelectorAll("button");
let playerScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playRound(button.id, computerPlay());
  });
});

function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    document.getElementById("result").textContent = "Tie game!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    document.getElementById(
      "result"
    ).textContent = `You win! ${playerSelection} beats ${computerSelection}`;
  } else {
    computerScore++;
    document.getElementById(
      "result"
    ).textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
  }
  updateScore();
}

function updateScore() {
  document.getElementById(
    "player-score"
  ).textContent = `Your score: ${playerScore}`;
  document.getElementById(
    "computer-score"
  ).textContent = `Computer's score: ${computerScore}`;
}
