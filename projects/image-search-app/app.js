// Set the access key for the Unsplash API
const accessKey = "3I7M0FgMDBz0BC9OMC4e4wi9ByTMXZYt0Rk4fQ15TKs";

// Get elements from the HTML document using their IDs
const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const searchResults = document.getElementById("search-results");
const showMoreButton = document.getElementById("show-more-button");

// Initialize variables
let page = 1;
let query = "";

// Create an asynchronous function to search for images
async function searchImages() {
  // Set the query value to the input value from the search form
  query = searchInput.value;
  // Create the URL for the Unsplash API with the page number, query, and access key
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${query}&client_id=${accessKey}`;
  // Send a request to the API and wait for the response
  const response = await fetch(url);
  // Parse the response data as JSON
  const data = await response.json();
  // Get the results array from the response data
  const results = data.results;

  // If this is the first page of results, clear the search results div
  if (page === 1) {
    searchResults.innerHTML = "";
  }

  // Loop through each result and create a div with an image and link for each one
  results.forEach((result) => {
    const imageWrapper = document.createElement("div");
    imageWrapper.classList.add("search-result");

    const image = document.createElement("img");
    image.src = result.urls.small;
    image.alt = result.alt_description;

    const imageLink = document.createElement("a");
    imageLink.href = result.links.html;
    imageLink.target = "_blank";
    imageLink.textContent = result.alt_description;

    imageWrapper.appendChild(image);
    imageWrapper.appendChild(imageLink);
    searchResults.appendChild(imageWrapper);
  });

  // Increment the page number for the next search
  page++;

  // Show the "show more" button if there are more than one page of results
  if (page > 1) {
    showMoreButton.style.display = "block";
  }
}

// Listen for a submit event on the search form, prevent the default action, and search for images
searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  page = 1;
  searchImages();
});

// Listen for a click event on the "show more" button and search for more images
showMoreButton.addEventListener("click", () => {
  searchImages();
});
