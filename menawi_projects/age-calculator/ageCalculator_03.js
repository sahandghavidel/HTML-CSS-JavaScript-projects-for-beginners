// Version 03 :: Doing the JavaScript solo here :

// --------

// where we post our test results
const testArea = document.querySelector("h2#result-test");

// --------------------- // user // ----------------------

// input area with type=date
const userBirthdayInput = document.querySelector("input#birthday")

// ----------------------// system values //---------------------------

// this gets today's day number 
const currentDay = new Date().getDate()

// gets this month
const currentMonth = new Date().getMonth()

// get this year
const currentYear = new Date().getFullYear()

// Message Area
const messageArea = document.querySelector("label#is-also-message-area");

// Submit Button
const submitButton = document.querySelector("button#btn")
submitButton.addEventListener("click", calculateAge)


// -------------------  👉 function to calculateAge  -------------------------

//  📍 Main function
function calculateAge() {
    // define variables of raw user input from the date-input HTML element
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

    // Calculate Age Logic  👉
    // condition A : 
    if (diffYears < 0 || (diffYears === 0 && diffMonths < 0 || (diffYears === 0 && diffMonths === 0 && diffDays < 0))) {
        messageArea.textContent = `Error! Your age is ${diffYears}. You are not born yet.`
    }

    // condition B : User born today
    else if (diffYears === 0 && diffMonths === 0 && diffDays === 0) {
        messageArea.textContent = `Happy birthday! You were born today on ${new Date()} `
    }

    // Condition C : User age in months and days

    // sub-condition C_1 : User born this year, > 1 month ago
    else if (diffYears === 0 && diffMonths > 0) {
        messageArea.textContent = `You are ${diffMonths} months and ${diffDays}  days old.`
    }
    // sub_condition C_2
    else if (diffYears === 0 && diffMonths === 0 && diffDays > 0) {
        messageArea.textContent = `You are ${diffDays} days old`
    }

    // condition D : User born before this year - User is at least >=1 year old
    else if (diffYears > 0) {
        // sub-condition D_1 : User birthday month or day didn't happen yet and thus they are technically 1 year younger
        if (diffMonths < 0 || (diffMonths === 0 && diffDays < 0)) {
            messageArea.textContent = `You are ${diffYears - 1} years old`
        }
        // sub-condition D_2 : User birthday happened this year
        else {
            messageArea.textContent = `You are ${diffYears} years old`
        }
    }
}

// ---------------------  function calculateAge works 👍 ----------------
//  Now consolidate it by explaining what it does out loud! Practice is nothing without understanding.
