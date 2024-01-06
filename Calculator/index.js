const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try {
        display.value = eval(display.value);    
    } catch (error) {
        display.value = "error";
    }
    
}

document.addEventListener("keypress", function(event){
    
    if (event.key === "Enter") {
        // event.preventDefault();
        calculate();
    } else if(event.key === "c") {
        clearDisplay();
    }
    else{
        display.value += event.key;
    }
})

// const display = document.getElementById("display");

// function appendToDisplay(input) {
//     display.value += input;
// }

// function clearDisplay() {
//     display.value = "";
// }

// function calculate() {
//     try {
//         display.value = Function('"use strict";return (' + display.value + ')')();
//     } catch (error) {
//         display.value = "error";
//     }
// }

// document.addEventListener("keydown", function (event) {
//     if (event.key === "Enter") {
//         event.preventDefault(); // Prevent the default behavior (e.g., form submission)
//         calculate();
//     } else if (event.key === "c") {
//         clearDisplay();
//     } else {
//         appendToDisplay(event.key);
//     }
// });
