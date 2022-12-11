const galleryEl = document.getElementById("gallery");
const errorMessageEl = document.getElementById("errorMessage");
const btnEl = document.getElementById("btn");

async function loadImage() {
  const inputValue = document.getElementById("input").value;
  if (inputValue > 10 || inputValue < 1) {
    errorMessageEl.style.display = "block";
    errorMessageEl.innerHTML = "Number should be between 1 and 10";

    return;
  }

  let images = "";

  try {
    btnEl.style.display = "none";
    loading = `<img
    src="spinner.svg"
    alt="image"
  />`;

    galleryEl.innerHTML = loading;

    await fetch(
      `https://api.unsplash.com/photos?per_page=${inputValue}&query=office&page=${Math.round(
        Math.random() * 1000
      )}&client_id=2zo4prpSQRMCG-gokmZT4sGe9hIAkcbdiTct1dnRzAY`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          errorMessageEl.style.display = "none";
          data.forEach((pic) => {
            images += `
         <img src=${pic.urls.small} alt="cat" />
         `;
          });
          galleryEl.style.display = "block";
          galleryEl.innerHTML = images;
        }
      });

    btnEl.style.display = "block";
  } catch (error) {
    console.log(error);
    errorMessageEl.style.display = "block";
    errorMessageEl.innerHTML = "An error happened, please try again later";
    btnEl.style.display = "block";
  }
}

btnEl.addEventListener("click", loadImage);
