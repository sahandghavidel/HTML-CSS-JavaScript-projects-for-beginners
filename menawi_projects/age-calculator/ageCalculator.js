// const date_test = new Date().getDate();
// console.log(date_test)


// ## 📌 LEARNING POINTS 

// ### Date Object
// 1. The Date() object is a built-in object in JavaScript that stores the date and time.
// 2. The new Date() constructor creates a new date object with the current date and time:
// 3. The getDate() method returns the day of the month (from 1 to 31) for the specified date.
// 4. Subtracting two dates in JavaScript = result in milliseconds

// ---------------------------
// 👉 Returns difference between today and your birthday in years
// const resultTest = document.getElementById("result-test");

// function getUserAge(birthdayValue){
//     const todayDate = new Date();
//     const birthdayDate = new Date(birthdayValue);

//     let userAge = todayDate.getFullYear() - birthdayDate.getFullYear()

//     console.log(userAge) //works
//     // resultTest.innerHTML = userAge.toString()
//     resultTest.textContent = userAge.toString()
//     // print the result to the document ?
// }

// getUserAge("1990-01-01");
// ---------------------------

// ## 📌 LEARNING POINTS 
// ### Print to DOM
// 1. Diff between printing .innerHTML, .innerTEXT, and .textContent
// 2. Must add .toString() to print to DOM if not already a string

// ---------------------------


// ---------------------------
// 👉 Adding the month in function now

// print result to his element
const resultTest = document.getElementById("result-test");

function getUserAge(birthdayValue){
    // get standard date and time object
    const todayDate = new Date();
    const birthdayDate = new Date(birthdayValue);
    
    // .getDate() = gets the day today as integer
    const dayOfCurrentDate = todayDate.getDate();
    const dayOfBirthdayDate = birthdayDate.getDate();

    // this gets the age in years as integer
    let differenceYears = todayDate.getFullYear() - birthdayDate.getFullYear();

    // this helps us decide whether the user has reached the next age or not
    let differenceMonths = todayDate.getMonth() - birthdayDate.getMonth();

    // Here ask : what would prevent the user from achieving the next age?
    // Logic:

    if (differenceMonths < 0 ) {
        // for example, 5 - 10
        differenceYears - 1;
    } else if (
        differenceMonths === 0 && dayOfCurrentDate < dayOfBirthdayDate) {
            differenceYears - 1;
        }

    else {

        return age;

    }

    resultTest.textContent = differenceYears.toString();

}

getUserAge("1990-01-01");
// success !
// ---------------------------


// ---------------------------
// 👉 Adding the month in function now

// print result to his element
const resultTest = document.getElementById("result-test");

function getUserAge(birthdayValue){
    // get standard date and time object
    const todayDate = new Date();
    const birthdayDate = new Date(birthdayValue);
    
    // .getDate() = gets the day today as integer
    const dayOfCurrentDate = todayDate.getDate();
    const dayOfBirthdayDate = birthdayDate.getDate();

    // this gets the age in years as integer
    let differenceYears = todayDate.getFullYear() - birthdayDate.getFullYear();

    // this helps us decide whether the user has reached the next age or not
    let differenceMonths = todayDate.getMonth() - birthdayDate.getMonth();

    // Here ask : what would prevent the user from achieving the next age?
    // Logic:

    if (differenceMonths < 0 ) {
        // for example, 5 - 10
        differenceYears - 1;
    } else if (
        differenceMonths === 0 && dayOfCurrentDate < dayOfBirthdayDate) {
            differenceYears - 1;
        }

    else {

        return age;

    }

    resultTest.textContent = differenceYears.toString();

}

getUserAge("1990-01-01");
// success !
// ---------------------------
