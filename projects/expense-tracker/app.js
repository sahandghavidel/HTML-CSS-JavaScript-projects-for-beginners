// Select elements
const form = document.querySelector("form");
const inputs = document.querySelectorAll("input");

let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

// Create expense list container
const list = document.createElement("ul");
const totalText = document.createElement("h3");

document.querySelector(".container").appendChild(list);
document.querySelector(".container").appendChild(totalText);

// Render expenses
function renderExpenses() {
  list.innerHTML = "";
  let total = 0;

  expenses.forEach((expense, index) => {
    const li = document.createElement("li");
    li.style.display = "flex";
    li.style.justifyContent = "space-between";
    li.style.alignItems = "center";
    li.style.margin = "5px 0";

    const text = document.createElement("span");
    text.textContent = `${expense.name} - Rs ${expense.amount}`;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.style.cursor = "pointer";

    removeBtn.addEventListener("click", () => {
      expenses.splice(index, 1);
      renderExpenses();
    });

    li.appendChild(text);
    li.appendChild(removeBtn);
    list.appendChild(li);

    total += expense.amount;
  });

  totalText.textContent = `Total Expense: Rs ${total}`;
  localStorage.setItem("expenses", JSON.stringify(expenses));
}

// Add expense
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = inputs[0].value.trim();
  const amount = Number(inputs[1].value);

  if (name === "" || amount <= 0) {
    alert("Please enter valid expense details");
    return;
  }

  expenses.push({ name, amount });

  inputs[0].value = "";
  inputs[1].value = "";

  renderExpenses();
});

// Load saved data on refresh
renderExpenses();
