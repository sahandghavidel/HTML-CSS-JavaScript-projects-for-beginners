const diceElement = document.getElementById("dice");
const rollButton = document.getElementById("roll-button");
const rollHistory = document.getElementById("roll-history");
let historyList = [];

function rollDice() {
  const rollResult = Math.floor(Math.random() * 6) + 1;
  const diceFace = getDiceFace(rollResult);
  diceElement.textContent = diceFace;
  historyList.push(rollResult);
  updateRollHistory();
}

function getDiceFace(rollResult) {
  switch (rollResult) {
    case 1:
      return "⚀";
    case 2:
      return "⚁";
    case 3:
      return "⚂";
    case 4:
      return "⚃";
    case 5:
      return "⚄";
    case 6:
      return "⚅";
    default:
      return "";
  }
}

function updateRollHistory() {
  rollHistory.innerHTML = "";
  for (let i = 0; i < historyList.length; i++) {
    const listItem = document.createElement("li");
    listItem.innerHTML = `Roll ${i + 1}: <span>${getDiceFace(
      historyList[i]
    )}</span>`;
    rollHistory.appendChild(listItem);
  }
}

rollButton.addEventListener("click", () => {
  diceElement.classList.add("roll-animation");
  setTimeout(() => {
    diceElement.classList.remove("roll-animation");
    rollDice();
  }, 1000);
});
