const btnEl = document.getElementById("btn");
const birthdayEl = document.getElementById("birthday");
const resultEl = document.getElementById("result");

function calculateAge() {
  const birthdayValue = birthdayEl.value;

  // 🔥 VALIDATION 1: EMPTY CHECK
  if (birthdayValue === "") {
    alert("Please enter your birthday");
    return;
  }

  // 🔥 VALIDATION 2: FUTURE DATE BLOCK
  const selectedDate = new Date(birthdayValue);
  const today = new Date();

  if (selectedDate > today) {
    alert("Future date not allowed");
    return;
  }

  // ✅ ORIGINAL CODE
  const age = getAge(birthdayValue);
  resultEl.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
}
    const age = getAge(birthdayValue);
    resultEl.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
  }
}

function getAge(birthdayValue) {
  const currentDate = new Date();
  const birthdayDate = new Date(birthdayValue);
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
