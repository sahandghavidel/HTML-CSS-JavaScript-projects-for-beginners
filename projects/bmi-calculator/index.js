const btnEl = document.getElementById("btn");
const BMIInputEl = document.getElementById("bmi");
const weightConditionEl = document.getElementById("weight-condition");

function calculateBMI() {
  const HeightValue = document.getElementById("height").value / 100;

  const weightValue = document.getElementById("weight").value;
  const bmiValue = weightValue / (HeightValue * HeightValue);
  BMIInputEl.value = bmiValue;

  if (bmiValue < 18.5) {
    weightConditionEl.innerText = "Under weight";
  } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
    weightConditionEl.innerText = "Normal weight";
  } else if (bmiValue >= 25 && bmiValue <= 29.9) {
    weightConditionEl.innerText = "Overweight";
  } else if (bmiValue >= 30) {
    weightConditionEl.innerText = "Obesity";
  }
}

btnEl.addEventListener("click", calculateBMI);
