const resultField = document.getElementById("result");
const buttons = document.querySelectorAll("button");

for (let i = 0; i < buttons.length; i++) {
  const button = buttons[i];
  button.addEventListener("click", function () {
    const buttonValue = button.textContent;
    if (buttonValue === "C") {
      clearResult();
    } else if (buttonValue === "=") {
      calculate();
    } else {
      appendValue(buttonValue);
    }
  });
}

function appendValue(val) {
  resultField.value += val;
}

function clearResult() {
  resultField.value = "";
}

function calculate() {
  const expression = resultField.value;
  const result = eval(expression);
  //   In JavaScript, eval() is a built-in function that evaluates a string as if it were a JavaScript code and returns the result. It can be used to dynamically evaluate expressions or code that is generated at runtime.

  // In the context of a calculator, eval() can be used to evaluate the arithmetic expression entered by the user and return the result.

  // For example, if the user enters the expression "2 + 3 * 4", eval("2 + 3 * 4") will return 14, which is the result of evaluating the expression.
  resultField.value = result;
}
