const calculateBtn = document.getElementById("calculate");
const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const totalSpan = document.getElementById("total");

calculateBtn.addEventListener("click", function () {
  const bill = billInput.value;
  const tip = tipInput.value;
  const total = bill * (1 + tip / 100);
  totalSpan.innerText = `$${total.toFixed(2)}`;
});
