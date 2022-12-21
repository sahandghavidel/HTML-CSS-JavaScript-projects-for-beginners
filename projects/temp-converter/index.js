const celsiusEl = document.getElementById("celsius");
const fahrenheitEl = document.getElementById("fahrenheit");
const kelvinEl = document.getElementById("kelvin");

function computeTemp(e) {
  const value = +e.target.value;
  switch (e.target.name) {
    case "celsius":
      kelvinEl.value = (value + 273.32).toFixed(2);
      fahrenheitEl.value = (value * 1.8 + 32).toFixed(2);
      break;
    case "fahrenheit":
      celsiusEl.value = ((value - 32) / 1.8).toFixed(2);
      result = kelvinEl.value = ((value - 32) / 1.8 + 273.15).toFixed(2);
      break;
    case "kelvin":
      celsiusEl.value = (value - 273.15).toFixed(2);
      fahrenheitEl.value = ((value - 273.15) * 1.8 + 32).toFixed(2);
      break;
  }
}
