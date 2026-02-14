let num = 0;

const value = document.querySelector(".value");
const btns = document.querySelectorAll(".btn");
const themeToggle = document.querySelector(".theme-toggle");

// COUNTER LOGIC
btns.forEach(btn =>
  btn.addEventListener("click", e => {
    const classes = e.currentTarget.classList;

    if (classes.contains("decrease")) num--;
    else if (classes.contains("increase")) num++;
    else if (classes.contains("reset")) num = 0;

    updateUI();
  })
);

// MODERN UPDATE UI FUNCTION
const updateUI = () => {
  value.textContent = num;

  let color = "black"; // default color

  if (num > 0) color = "green";
  else if (num < 0) color = "red";

  // Adjust for dark mode
  if (document.body.classList.contains("dark-mode") && num === 0) {
    color = "white";
  }

  value.style.color = color;
};

// 🌙 DARK MODE TOGGLE
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  updateUI(); // Update counter color immediately
});

// Initialize UI on load
updateUI();
