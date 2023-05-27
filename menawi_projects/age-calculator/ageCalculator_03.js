// Version 03 :: Doing the JavaScript solo here :

// --------

// where we post our test results
const testArea = document.querySelector("h2#result-test");

// --------user---------

// input area with type=date
const userBirthdayInput = document.querySelector("input#birthday")

// ------------ test user values work ------------




// function checkUserValues() {

//     // get the value of the user's birthday input
//     const valueOfUserBirthdayInput = new Date(userBirthdayInput.value);

//     // get the day, month, and year of the user's birthday
//     const dayOfUserBirthday = valueOfUserBirthdayInput.getUTCDate();
//     const monthOfUserBirthday = valueOfUserBirthdayInput.getUTCMonth() + 1;
//     const yearOfUserBirthday = valueOfUserBirthdayInput.getUTCFullYear();

//     // Another bug  👆 : When the user chooses "January 1st" in the input date element , they receive this message : Your date of Birth is 31/12/2022. This is because JavaScript sets the time to midnight when you instantiate a new JavaScript Date object. You must use getUTCDate(), getUTCMonth(), and getUTCFullYear() to get the correct values. 

//     // if the value of the user's birthday input is valid...
//     if (valueOfUserBirthdayInput) {

//         // log the day, month, and year of the user's birthday
//         console.log(dayOfUserBirthday)
//         console.log(monthOfUserBirthday)
//         console.log(yearOfUserBirthday)

//         testArea.textContent = `Your date of Birth is ${dayOfUserBirthday}/${monthOfUserBirthday}/${yearOfUserBirthday}`

//         // otherwise, if the value of the user's birthday input is invalid...
//     } else {

//         // alert the user
//         alert("Please input a date");

//     }
// }

// // when the user changes the value of the user's birthday input, check the user's values
// userBirthdayInput.addEventListener("change", checkUserValues);



// --------------------------------- system values ---------------------------

// this gets today's day number 
const currentDay = new Date().getDate()

// gets this month
const currentMonth = new Date().getMonth()

// get this year
const currentYear = new Date().getFullYear()

// button to submit user's date input

// --------------------------- function to calc age -------------------------


const messageArea = document.querySelector("label#is-also-message-area");

const submitButton = document.querySelector("button#btn")
submitButton.addEventListener("click", getAgeinYears)

function getAgeinYears() {
    // raw user input form the date HTML element
    const userInput_fromDateElement = document.querySelector("input#birthday");
    // not extract date values
    const extractDateValue_fromUserInput = new Date(userInput_fromDateElement.value)
    // use this to extract day months years
    const extractUserDay = extractDateValue_fromUserInput.getUTCDate()
    const extractUserMonth = extractDateValue_fromUserInput.getUTCMonth()
    const extractUserYear = extractDateValue_fromUserInput.getUTCFullYear()

    // subtract input and system values

    const diffDays = currentDay - extractUserDay
    const diffMonths = currentMonth - extractUserMonth
    const diffYears = currentYear - extractUserYear

    //  👉 lets test these values 

    console.log(diffDays)
    console.log(diffMonths)
    console.log(diffYears)

    // They work! ✅ // 

    // Now we need the logic to check if the user bday happened this year or not
    // If yes, then return years
    // If no, then return years - 1 :: he / she will be 1 year younger than the current year
    //

    // >if this year but my birthday month not happened yet, then years - 1
    // >if this year and this month but day not yet , then years - 1
    // >if this or greater year, this or greater month, this or greater day, then return age

    // this month: month === 0 
    // still not month: month < 0
    // this day: day === 0
    // still not day = day < 0

    // breakthrough  👉 diffYears is the main condition , if it is < 0 then invalid selection.

    ///////////////////---------------this works---------------------
    // if (diffYears < 0) {
    //     messageArea.textContent = `Your age is ${diffYears}, you are not born yet`
    // } else {
    //     messageArea.textContent = `test ${diffYears}`
    // }
    ////////----------- keeping it for reference / testing ----------


    // ----------------  👇 ------------------
    if (diffYears < 0) {
        messageArea.textContent = `Your age is ${diffYears}, you are not born yet`
    } else if (diffYears >= 0 && diffMonths <= 0 && diffDays <= 0) {
        // messageArea.textContent = `test ${diffYears}`
        messageArea.textContent = `You did not turn ${diffYears + 1} yet. Your current age is ${diffYears - 1}`
    } else if (diffYears >= 0 && diffMonths >= 0 && diffDays <= 0) {
        messageArea.textContent = `You did not turn ${diffYears} yet. Your current age is ${diffYears - 1}. You will turn ${diffYears} in ${diffDays}`
    } else {
        messageArea.textContent = `Your age is ${diffYears}`
    }


    // -------------------👆----------------------
    // if (diffMonths < 0 || diffMonths === 0 && diffDays < 0) {
    //     // return `Your age is ${diffYears - 1}`
    //     messageArea.textContent = `Your age is ${diffYears - 1}`
    // } else if (diffDays === 0 && diffMonths === 0) {
    //     // `You are turning ${diffYears} today !`
    //     messageArea.textContent = `You are turning ${diffYears} today !`

    // } else if (diffYears < 0) {

    //     // `You are not born yet, we will see you in ${diffYears} years`
    //     messageArea.textContent = `You are not born yet, we will see you in ${diffYears} years`

    // } else if (diffDays <= 0 && diffMonths <= 0 && diffYears === 0) {
    //     // `You are scheduled to be born today`
    //     messageArea.textContent = "You are scheduled to be born today"
    // } else {
    //     // return $[diffYears]
    //     messageArea.textContent = `Your age is ${diffYears}`
    // }


}










// ---------------------------------------------
// ----------------- test function --------------

// tests our functions
function testFunctions(functionToTest) {
    testArea.textContent = functionToTest
}


