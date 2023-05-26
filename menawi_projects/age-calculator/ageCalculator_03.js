// Version 03 :: Doing the JavaScript solo here :

// --------

// where we post our test results
const testArea = document.querySelector("h2#result-test");

// --------user---------

// input area with type=date
const userBirthdayInput = document.querySelector("input#birthday")

// ------------ test user values work ------------




function checkUserValues() {

    // get the value of the user's birthday input
    const valueOfUserBirthdayInput = new Date(userBirthdayInput.value);

    // get the day, month, and year of the user's birthday
    const dayOfUserBirthday = valueOfUserBirthdayInput.getDate();
    const monthOfUserBirthday = valueOfUserBirthdayInput.getMonth();
    const yearOfUserBirthday = valueOfUserBirthdayInput.getFullYear();

    // if the value of the user's birthday input is valid...
    if (valueOfUserBirthdayInput) {

        // log the day, month, and year of the user's birthday
        console.log(dayOfUserBirthday)
        console.log(monthOfUserBirthday)
        console.log(yearOfUserBirthday)

        testArea.textContent = `Your date of Birth is ${dayOfUserBirthday}/${monthOfUserBirthday}/${yearOfUserBirthday}`

        // otherwise, if the value of the user's birthday input is invalid...
    } else {

        // alert the user
        alert("Please input a date");

    }
}

// when the user changes the value of the user's birthday input, check the user's values
userBirthdayInput.addEventListener("change", checkUserValues);



// ---------interface----------

// this gets today's day number 
const currentDay = new Date().getDate()

// gets this month
const currentMonth = new Date().getMonth()

// get this year
const currentYear = new Date().getFullYear()

// ----------------- test function --------------

// tests our functions
function testFunctions(functionToTest) {
    testArea.textContent = functionToTest
}

// button to submit user's date input
const submitButton = document.querySelector("button#btn")



// ----------

function getAgeinYears() {
    console.log("test")
}




// TESTS -----------------

// testFunctions(today) ✅ success
// testFunctions(DayOfUserBirthday.toString()) //failed ❌
// testFunctions(thisMonth) // ✅
// testFunctions(currentYear) //✅

