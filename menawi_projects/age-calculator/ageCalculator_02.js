// Version 02 :: Returns difference between today and your birthday in years, AND months, and days.

// Crucial : the months and day consideration are the difference between someone being registered as 18 vs 17 years old!

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
