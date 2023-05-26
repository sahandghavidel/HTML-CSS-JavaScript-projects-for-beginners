// 👉 Template  Takes input from curl -s -X GET "http://api.alquran.cloud/v1/ayah/{surah_num:ayah_num}/editions/quran-uthmani" -H "Accept-Language: ar" -o response.txt && sed -n 's/.*"text":"\([^"]*\)".*/\1/p' response.txt


// 👉Example :: curl -s -X GET "http://api.alquran.cloud/v1/ayah/3:255/editions/quran-uthmani" -H "Accept-Language: ar" -o response.txt && sed -n 's/.*"text":"\([^"]*\)".*/\1/p' response.txt


// ---------------------------


// Function to fetch a verse from the Quran API

// fetchQuranVerse()


const buttonToTestFunctions = document.createElement("button")
buttonToTestFunctions.textContent = "Test Functions"
buttonToTestFunctions.style = "position: fixed; top: 50%; right: 45%; color: white; background-color: black;"
document.body.appendChild(buttonToTestFunctions)
buttonToTestFunctions.addEventListener("click", fetchQuranVerse)

async function fetchQuranVerse() {
    try {
      const verseNumber = prompt("Enter the verse number:");
      const surahNumber = prompt("Enter the surah number:");
      const response = await fetch(`http://api.alquran.cloud/v1/ayah/${verseNumber}:${surahNumber}/editions/quran-uthmani`);
      const data = await response.json();
      
      // Retrieve the Unicode text from the response
      const unicodeText = data.data[0].text;
      
      // Pass the Unicode text to the conversion function and return the result
      return convertToArabicText(unicodeText);
    } catch (error) {
      console.error("Error fetching Quran verse:", error);
      throw error;
    }
  }
  
  // Function to convert Unicode text to Arabic text
  function convertToArabicText(unicodeText) {
    // Implement your own logic here to convert Unicode text to Arabic text
    // For demonstration purposes, we are simply returning the same text
    return unicodeText;
  }
  
  // Example usage of the async function
  fetchQuranVerse()
    .then((arabicText) => {
      console.log("Arabic Text:", arabicText);
      document.body.appendChild(document.createElement("p")).textContent = arabicText
    })
    .catch((error) => {
      console.error("Error:", error);
    });


    