





## Version 03
👉 [[./ageCalculator_03.js]]
// ----------- ⛳️ Corrected Code for Checking user values ------------------
// Summary of issues:
// 1. I was asking for the variables OUTSIDE of the function. I need to give the user time to inupt the value, and hence bring the value into existence, before I can run the function. THAT is why I must scope the dayOfUserBirthday etc... in the function
// 2. After user chooses a value, you must convert that value into a date even if the input type is already......date... It is as though the input type is only for UI purposes and the avtual values must be made via JavaScript (turn into Date 👉 then get .value)


<!-- ----------------------- -->

📌 Key Methods Learned

1. Scope of the date variables 
2. Element.addEventListener("change", function)
3. EmptyElement.textContent NOT .innerHTML or .innerTEXT 
4. Date element HTML 👉 Convert it to a Date Object 👉 Get its .value 


<!-- --------------Friday, May 26 -->

📌 Keys 
Sunday, May 28 2023
1. Broke down the function to 3 main conditions
2. 