
// ------------------------

// ⭐️ My personal library ⭐️

// create element
const createElement = (elementType) => { return document.createElement(elementType) }
// append element to document
const appendElement = (element) => { document.body.appendChild(element); }
// change the inner text of element
const innerText = (element, value) => { element.innerText = value }
// get element by id
const getid = (elementid) => { return document.getElementById(elementid) }
// function to show my results in the document
function showMyResult(param) {
    let elementToAppend = createElement("p");
    appendElement(elementToAppend);
    innerText(elementToAppend, param);
}
// run function every x seconds
const runInterval = (actions, timer) => setInterval(
    () => { actions() }, timer
)

function runInterval(actions, timer) {

    let result = setInterval( () => {
        actions
    }, timer);

    return result;
}

function doSomething() {
    console.log("do something");
}



// runInterval(showMyResult(), 1000)


// ------------------------

// 🗓️ Age Calculator 🗓️ 

// CONSTANTS

const button = getid("btn");
button.addEventListener("click", () => { showMyResult("button works!") });


