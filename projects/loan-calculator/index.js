function calculateLoan() {
  event.preventDefault();

   var loanAmountValue = document.getElementById("loan-amount").value;

   var interestRateValue = document.getElementById("interest-rate").value;

  var MonthsToPayValue = document.getElementById("months-to-pay").value;

 var interest = (loanAmountValue * (interestRateValue * 0.01)) / MonthsToPayValue;

  monthlyPayment = (loanAmountValue / MonthsToPayValue + interest).toFixed(2);

 
  document.getElementById("payment").innerHTML="Total Loan to be paid is Ruppees " + monthlyPayment
  document.getElementById("loan-amount").value = "";
  document.getElementById("interest-rate").value = "";
  document.getElementById("months-to-pay").value = "";

   
}
