const btnEl = document.getElementById("calculate");
const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const totalSpan = document.getElementById("total");

function calculateTotal() {
  const billValue = billInput.value;
  const tipValue = tipInput.value;
  if(tipValue<=0||billValue<=0){
    alert("bill value or tip value cannot be less than equal to zero);
  }else{
  const totalValue = billValue * (1 + tipValue / 100);
  totalSpan.innerText = totalValue.toFixed(2);
  }
}

btnEl.addEventListener("click", calculateTotal);
