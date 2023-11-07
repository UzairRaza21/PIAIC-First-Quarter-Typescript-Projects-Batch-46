#! /usr/bin/env node
import inquirer from "inquirer";
let enterPara = await inquirer.prompt({
    message: "Enter a paragraph",
    type: "input",
    name: "para",
});
console.log(enterPara.para.replaceAll(' ', '').length);
