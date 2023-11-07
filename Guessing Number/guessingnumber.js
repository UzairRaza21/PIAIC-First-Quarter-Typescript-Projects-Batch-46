#! /usr/bin/env node
// Number Guessing game
let result = Math.random() * 100;
let roundNumber = Math.round(result);
console.log(roundNumber);
import inquirer from "inquirer";
let userInput = await inquirer.prompt({ message: "Enter a number",
    type: "number",
    name: "num1"
});
if (userInput.num1 === roundNumber) {
    console.log("Suceed! You have chosen right Number");
}
else {
    console.log("Sorry! Try again, Your Number does not match");
}
