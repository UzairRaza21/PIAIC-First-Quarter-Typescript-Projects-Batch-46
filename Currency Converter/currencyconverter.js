#! /usr/bin/env node 
import inquirer from "inquirer";
let usdrate = 305;
let euroRate = 350;
let gbpRate = 360;
let enterAmount = await inquirer.prompt([
    {
        message: "Enter amount",
        type: "number",
        name: "num1",
    },
    {
        message: "Select currency to convert into PKR",
        type: "list",
        choices: ["USD", "Euro", "GBP"],
        name: "currency",
    }
]);
if (enterAmount.currency === "USD") {
    let result = enterAmount.num1 * usdrate;
    console.log(`Amount in PKR is ${result}`);
}
else if (enterAmount.currency === "Euro") {
    let result = enterAmount.num1 * euroRate;
    console.log(`Amount in PKR is ${result}`);
}
else {
    let result = enterAmount.num1 * gbpRate;
    console.log(`Amount in PKR is ${result}`);
}
