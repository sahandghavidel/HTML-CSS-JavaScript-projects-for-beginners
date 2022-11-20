function calculateLoan() {
    const amount = document.getElementById("amount").value
    const interest_rate = document.getElementById("interest_rate").value
    const months = document.getElementById("months").value
    const interest = (amount * (interest_rate * .01)) / months

    const payment = (amount / months + interest).toFixed(2)

    document.getElementById("payment").innerHTML = `monthly payment: ${payment}`


}