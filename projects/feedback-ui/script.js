const ratings = document.querySelectorAll(".rating");
const ratingsContainer = document.querySelector(".ratings-container");
const sendBtn = document.querySelector("#send");
const panel = document.querySelector("#panel");
let selectedRating = "Unhappy";

ratingsContainer.addEventListener("click", (e) => {
  console.log(e.target.parentNode.innerText);
  removeActive();
  selectedRating = e.target.innerText || e.target.parentNode.innerText;
  e.target.parentNode.classList.toggle("active");
  e.target.classList.toggle("active");
});

sendBtn.addEventListener("click", (e) => {
  panel.innerHTML = `
        <i class="fas fa-heart"></i>
        <strong>Thank You!</strong>
        <br>
        <strong>Feedback : ${selectedRating}</strong>
        <p>We'll use your feedback to improve our customer support.</p>
    `;
});

function removeActive() {
  for (let i = 0; i < ratings.length; i++) {
    ratings[i].classList.remove("active");
  }
}
