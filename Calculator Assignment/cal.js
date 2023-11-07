#! /usr/bin/env node
import { Sum } from "./add.js";
import inquirer from "inquirer";
import { Subtract } from "./sub.js";
import { Mult } from "./mult.js";
import { Divide } from "./div.js";
let answers = await inquirer.prompt([
    {
        message: "Enter your first number",
        type: "number",
        name: "num1"
    },
    {
        message: "Enter your Second number",
        type: "number",
        name: "num2"
    },
    {
        message: " Select operator",
        type: "list",
        choices: ["+", "-", "*", "/"],
        name: "operator"
    }
]);
if (answers.operator === "+") {
    let result = Sum(answers.num1, answers.num2);
    console.log(result);
}
else if (answers.operator === "-") {
    let result = Subtract(answers.num1, answers.num2);
    console.log(result);
}
else if (answers.operator === "*") {
    let result = Mult(answers.num1, answers.num2);
    console.log(result);
}
else if (answers.operator === "/") {
    let result = Divide(answers.num1, answers.num2);
    console.log(result);
}
else {
    console.log("Kindly enter value");
}
