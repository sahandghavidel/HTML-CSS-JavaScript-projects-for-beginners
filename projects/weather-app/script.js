// Set the API key to be used for making requests to the OpenWeatherMap API
const apiKey = "ec24604fb141c0188e07713025f2b7b8";

// Get the element that will display the weather data on the page
const weatherData = document.getElementById("weather-data");

// Get the input element for the city from the HTML form
const cityInput = document.getElementById("city-input");

// Get the HTML form element
const form = document.querySelector("form");

// Add a submit event listener to the form, which will get the value from the city input field and use it to get weather data
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent the default form submission behavior
  const city = cityInput.value; // Get the value from the city input field
  getWeatherData(city); // Call the function to get weather data for the specified city
});

// Define an async function to get weather data for a given city
async function getWeatherData(city) {
  try {
    // Make a request to the OpenWeatherMap API to get weather data for the specified city
    const response = await fetch(`
https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);

    // Check if the response from the API is not ok (e.g. 404 error)
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    // Parse the response from the API as JSON
    const data = await response.json();

    // Check if the API returned an error message
    if (data.cod === "404") {
      throw new Error(data.message);
    }

    // Extract the temperature, description, icon, and other weather details from the API response
    const temperature = Math.round(data.main.temp);
    const description = data.weather[0].description;
    const icon = data.weather[0].icon;
    const details = [
      `Feels like: ${Math.round(data.main.feels_like)}°C`,
      `Humidity: ${data.main.humidity}%`,
      `Wind speed: ${data.wind.speed} m/s`,
    ];

    // Set the HTML content of the weather data display elements to the retrieved weather data
    weatherData.querySelector(
      ".icon"
    ).innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}.png" alt="Weather Icon">`;
    weatherData.querySelector(".temperature").textContent = `${temperature}°C`;
    weatherData.querySelector(".description").textContent = description;
    weatherData.querySelector(".details").innerHTML = details
      .map((detail) => `<div>${detail}</div>`)
      .join("");
  } catch (error) {
    console.log(error);

    // If there was an error fetching weather data, clear the HTML content of the weather data display elements and display an error message
    weatherData.querySelector(".icon").innerHTML = "";
    weatherData.querySelector(".temperature").textContent = "";
    weatherData.querySelector(".description").textContent =
      "Error fetching weather data. Please try again.";
    weatherData.querySelector(".details").innerHTML = "";
  }
}

// The above code uses the Fetch API to retrieve weather data from the OpenWeatherMap API, and the async/await syntax to handle the asynchronous nature of the API call. The code also dynamically updates the HTML content of the weather data display elements with the retrieved weather data.
