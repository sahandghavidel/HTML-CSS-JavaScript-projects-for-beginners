
// Version 01 :: Simple returns the difference between today and your birthday in years without factoring in the 👉 month and day 👈

// 👉 Returns difference between today and your birthday in years
const resultTest = document.getElementById("result-test");

function getUserAge(birthdayValue){
    const todayDate = new Date();
    const birthdayDate = new Date(birthdayValue);

    let userAge = todayDate.getFullYear() - birthdayDate.getFullYear()

    console.log(userAge) //works
    // resultTest.innerHTML = userAge.toString()
    resultTest.textContent = userAge.toString()
    // print the result to the document ?
}

getUserAge("1990-01-01");
// ---------------------------

// ## 📌 LEARNING POINTS 

// ### Date Object
// 1. The Date() object is a built-in object in JavaScript that stores the date and time.
// 2. The new Date() constructor creates a new date object with the current date and time:
// 3. The getDate() method returns the day of the month (from 1 to 31) for the specified date.
// 4. Subtracting two dates in JavaScript = result in milliseconds

// ---------------------------

// ## 📌 LEARNING POINTS 
// ### Print to DOM
// 1. Diff between printing .innerHTML, .innerTEXT, and .textContent
// 2. Must add .toString() to print to DOM if not already a string
