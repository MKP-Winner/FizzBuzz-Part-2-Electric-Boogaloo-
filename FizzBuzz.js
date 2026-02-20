// TODO: Define constants for the form and the result display area
const form = document.getElementById("fizzbuzz-form");
const result = document.getElementById("result");

// TODO: Add the first line of the event listener to handle form submission
form.addEventListener("submit", function(event) {

    // Prevent the form from refreshing the page
    event.preventDefault();

// TODO: Get the number from the form input
const input = document.getElementById("number-input");
let num = Number(input.value);

// TODO: Write FizzBuzz logic here
// If divisible by both 3 and 5, set the output to "FizzBuzz"
// If divisible by 3, set the output to "Fizz"
// If divisible by 5, set the output to "Buzz"
// Otherwise, set the output to the number itself
let output;
if (input.value.trim() === "" || isNaN(num)) {
    output = "Please enter a valid number.";
} else if (num % 3 === 0 && num % 5 === 0) {
    output = "FizzBuzz";
} else if (num % 3 === 0) {
    output = "Fizz";
} else if (num % 5 === 0) {
    output = "Buzz";
} else {
    output = num;
}

// Display the result on the page
result.textContent = output;

});