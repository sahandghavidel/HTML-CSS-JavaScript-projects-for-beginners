const exchange_rate = document.getElementById('exchange-rate');
const curr_first = document.getElementById('curr-first');
const curr_second = document.getElementById('curr-second');
const worth_first = document.getElementById('worth-first');
const worth_second = document.getElementById('worth-second');

function convert() {
  const currency_first = curr_first.value;
  const currency_second = curr_second.value;
//using API for conversion of currency units
  fetch(`https://v6.exchangerate-api.com/v6/16947c81da979880bacde4f5/latest/${currency_first}`)
    .then((res) => res.json())
    .then((data) => {
      
      const rate = data.conversion_rates[currency_second];
      exchange_rate.innerText = `1 ${currency_first} = ${rate} ${currency_second}`;

      worth_second.value = (worth_first.value * rate).toFixed(5);
    });
}
//some javascript event listeners
curr_first.addEventListener('change', convert);
worth_first.addEventListener('input', convert);
curr_second.addEventListener('change', convert);
worth_second.addEventListener('input', convert);
convert();

























