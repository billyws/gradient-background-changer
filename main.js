//Declared variables --- Capturing from Color Input...
let colorOne = document.querySelector(".firstColor");
let colorTwo = document.querySelector(".secondColor");
let codeDisplay = document.querySelector(".copyCode");
let bgGradient = document.getElementById("gradient-background");

// Function that sets a background color capture from the inputs...
const setBgGradient = () => {
    bgGradient.style.background = 
    "linear-gradient(to right, " 
    + colorOne.value
     + "," 
    + colorTwo.value
    + ")";

    codeDisplay.textContent = bgGradient.style.background + ";";
}

// Event Listener being assigned to another variable...
colorOne.addEventListener("input", setBgGradient);
colorTwo.addEventListener("input", setBgGradient);
