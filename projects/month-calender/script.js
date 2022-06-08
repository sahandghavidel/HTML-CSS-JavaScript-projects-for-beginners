const date = new Date();

const monthDays = document.querySelector(".days");

const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

const firstDayIndex = date.getDay();

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

document.querySelector(".date h1").innerText = months[date.getMonth()];

document.querySelector(".date p").innerText = new Date().toDateString();

let days = "";

for (let i = firstDayIndex - 1; i > 0; i--) {
  days += `<div class="empty"></div>`;
}

for (let i = 1; i <= lastDay; i++) {
  if (i === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
    days += `<div class="today">${i}</div>`;
  } else {
    days += `<div>${i}</div>`;
  }
}

monthDays.innerHTML = days;
