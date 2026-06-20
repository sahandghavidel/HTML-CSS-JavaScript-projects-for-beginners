const btnEl = document.getElementById("calculate");
const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const totalSpan = document.getElementById("total");

function calculateTotal() {
   const billValue = Number(billInput.value);
  const tipValue = Number(tipInput.value);
  const totalValue = billValue * (1 + tipValue / 100);
  totalSpan.innerText = totalValue.toFixed(2);
}

btnEl.addEventListener("click", calculateTotal);

billInput.addEventListener("input", () => {
  if (billInput.value < 0) billInput.value = 0;
});
tipInput.addEventListener("input", () => {
  if (tipInput.value < 0) tipInput.value = 0;
});