const list = [
    "age-calculator",
    "amine-pics-generator",
    "animated-search-bar",
    "auto-text-effect-animation",
    "background-image-scroll-effect",
    "background-video",
    "basic-calculator",
    "blurred-background-popup",
    "bmi-calculator",
    "button-ripple-effect",
    "clock",
    "counter",
    "currency-converter",
    "dad-jokes-generator",
    "dark-mode-toggle",
    "dice-roll-simulator",
    "digital-clock",
    "double-landing-page",
    "drum-kits",
    "emoji-rating",
    "english-dictionary",
    "feedback-ui",
    "heart-trail-animation",
    "image-search-app",
    "image-slider",
    "loading-bar",
    "loan-calculator",
    "mini-calendar",
    "month-calender",
    "mouse-event",
    "multiplication-app",
    "music-player",
    "navbar",
    "new-year-countdown",
    "note-app",
    "photo-gallery",
    "pomodoro-timer",
    "profile-statistics",
    "q-and-a-section",
    "random-color-generator",
    "random-emoji",
    "random-password-generator",
    "random-photos",
    "random-quote-generator",
    "real-time-character-counter",
    "recipe-book-app",
    "rock-paper-scissors-game",
    "rotating-image-gallery",
    "sidebar",
    "social-media-selector-menu",
    "step-progress-bar",
    "sticky-navbar",
    "stopwatch",
    "tabs",
    "temperature-converter",
    "testimonial-slider",
    "tip-calculator",
    "to-do-list",
    "video-trailer-popup",
    "weather-app",
    "weight-converter"]


const list1 = ["weather-app", "tabs", "stopwatch"]

const ol = document.querySelector('ol')
const div = document.querySelector('div')

for(let i in list ) {
//   console.log(list[i])
  ol.innerHTML += `<li><a href="./projects/${list[i]}/index.html">${list[i]}</a></li>`
  div.appendChild(ol)
//   console.log(li)
}

// list1.forEach(element => {
//     ol.innerHTML += `<li><a href="./projects/${element}/index.html">${element}</a></li>`
//   div.appendChild(ol)
// });