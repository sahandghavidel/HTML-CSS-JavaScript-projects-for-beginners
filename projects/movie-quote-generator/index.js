btnEl = document.getElementById("btn");
quoteEl = document.getElementById("quote");
authorEl = document.getElementById("author");

async function getNextQuote() {
  try {
    btnEl.innerText = "Loading...";
    btnEl.disabled = true;
    quoteEl.innerText = "Updating...";
    authorEl.innerText = "~ " + "Updating...";
    let url = "https://api.quotable.io/random";
    const response = await fetch(url);
    const data = await response.json();
    const quoteContent = data.content;
    const quoteAuthor = data.author;
    quoteEl.innerText = quoteContent;
    authorEl.innerText = "~ " + quoteAuthor;
    btnEl.innerText = "Get quote";
    btnEl.disabled = false;
  } catch (error) {
    console.log(error);
    // test the error by setting up the network to offline
    quoteEl.innerText = "An error happened, try again later";
    authorEl.innerText = "~ " + "An error happened";
    btnEl.disabled = false;
    btnEl.innerText = "Get quote";
  }
}

btnEl.addEventListener("click", getNextQuote);

getNextQuote();
