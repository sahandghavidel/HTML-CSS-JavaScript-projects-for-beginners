let expression = '';

function appendToDisplay(value) {
  expression += value;
  document.getElementById('display').value = expression;
}

function calculate() {
  try {
    const result = eval(expression);
    document.getElementById('display').value = result;
    expression = '';
  } catch (error) {
    document.getElementById('display').value = 'Error';
    expression = '';
  }
}

function clearDisplay() {
  expression = '';
  document.getElementById('display').value = '';
}
