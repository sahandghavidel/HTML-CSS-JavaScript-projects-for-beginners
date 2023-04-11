const btnEl = document.getElementById("btn");
const birthdayEl = document.getElementById("birthday");
const resultEl = document.getElementById("result");

function Welcome(){
    // welcome.innerHTML = "<p> Thanks !</p>" ; 
    console.log("thanks") ; 
}
function calculateAge() {

  const birthdayValue = birthdayEl.value;

  if (birthdayValue === "") {
    alert("Please enter your birthday");
  } else {
    const age = getAge(birthdayValue);
    resultEl.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
  }

}

function getAge(birthdayValue) {
  const currentDate = new Date();
  const birthdayDate = new Date(birthdayValue);
  let age = currentDate.getFullYear() - birthdayDate.getFullYear(); // current year - birtday date year -->  2023 - 1972 
  const month = currentDate.getMonth() - birthdayDate.getMonth(); //current mont - birtdaymonth 4 - 12 = -8 

  if (month < 0 || (month === 0 && currentDate.getDate() < birthdayDate.getDate())) {
    return --age;
  }
 
  
}

btnEl.addEventListener("click", 
calculateAge , 

);
