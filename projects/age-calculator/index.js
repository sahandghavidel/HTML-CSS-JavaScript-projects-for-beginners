const btnEl = document.getElementById("btn");
const birthdayEl = document.getElementById("birthday");
const resultEl = document.getElementById("result");

// Prevent selecting a future date
const today = new Date();

const todayString =
  `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;

birthdayEl.max = todayString;

function calculateAge() {
  const birthdayValue = birthdayEl.value;

  if (birthdayValue === "") {
    alert("Please enter your birthday");
    resultEl.innerText = "Please enter your date of birth.";
    return;
  }

  const birthdayDate = new Date(`${birthdayValue}T00:00:00`);
  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);

  // Reject a birthday in the future
  if (birthdayDate > currentDate) {
    alert("Birthday cannot be in the future.");
    resultEl.innerText = "Please enter a valid date of birth.";
    return;
  }

  const age = getAge(birthdayValue);

  resultEl.innerText =
    `Your age is ${age} ${age === 1 ? "year" : "years"} old`;
}

function getAge(birthdayValue) {
  const currentDate = new Date();
  const birthdayDate = new Date(`${birthdayValue}T00:00:00`);

  let age = currentDate.getFullYear() - birthdayDate.getFullYear();

  const month = currentDate.getMonth() - birthdayDate.getMonth();

  if (
    month < 0 ||
    (month === 0 && currentDate.getDate() < birthdayDate.getDate())
  ) {
    age--;
  }

  return age;
}

btnEl.addEventListener("click", calculateAge);
