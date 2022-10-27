const btnEl = document.getElementById("emoji-btn");
const emojiNameEl = document.getElementById("emoji-name");

const emojis = [];

const emojiAddFunction = async () => {
  let response = await fetch(
    "https://emoji-api.com/emojis?access_key=c026368c7be293ca27c373a38b0d4361494d257d"
  );
  data = await response.json();
  console.log(data);

  for (let i = 0; i < 1500; i++) {
    emojis.push({
      name: data[i].unicodeName,
      character: data[i].character,
    });
  }
};

emojiAddFunction();

btnEl.addEventListener("click", () => {
  const randomNum = Math.floor(Math.random() * emojis.length);
  btnEl.innerText = emojis[randomNum].character;
  emojiNameEl.innerText = emojis[randomNum].name;
});
