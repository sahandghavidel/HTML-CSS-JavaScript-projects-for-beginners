const exchangeRateEl = document.getElementById("exchange-rate");
const currencyFirstEl = document.getElementById("currency-first");
const currencySecondEl = document.getElementById("currency-second");
const worthFirstEl = document.getElementById("worth-first");
const worthSecondEl = document.getElementById("worth-second");

function convert() {
  const currencyFirstValue = currencyFirstEl.value;
  const currencySecondValue = currencySecondEl.value;
  //using API for conversion of currency units
  fetch(
    `https://v6.exchangerate-api.com/v6/5f9d1c87f7250159c9c9b17d/latest/${currencyFirstValue}`
  )
    .then((res) => res.json())
    .then((data) => {
      const rate = data.conversion_rates[currencySecondValue];
      exchangeRateEl.innerText = `1 ${currencyFirstValue} = ${rate} ${currencySecondValue}`;

      worthSecondEl.value = (worthFirstEl.value * rate).toFixed(2);
    });
}
//some javascript event listeners
currencyFirstEl.addEventListener("change", convert);
worthFirstEl.addEventListener("input", convert);
currencySecondEl.addEventListener("change", convert);
worthSecondEl.addEventListener("input", convert);
convert();
