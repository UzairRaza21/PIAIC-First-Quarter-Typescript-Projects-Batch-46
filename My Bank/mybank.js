import inquirer from "inquirer";
import { faker } from "@faker-js/faker";
class Customer {
    constructor(fname, lname, age, gender, mobile, accNumber) {
        this.firstName = fname,
            this.lastName = lname,
            this.age = age,
            this.gender = gender,
            this.mobile = mobile,
            this.accNumber = accNumber;
    }
}
;
;
class Bank {
    constructor() {
        this.customer = [];
        this.account = [];
    }
    addCustomer(obj) {
        this.customer.push(obj);
    }
    addAccNumber(obj) {
        this.account.push(obj);
    }
    transaction(accObj) {
        let newAccountBal = this.account.filter((acc) => acc.accNumber !== accObj.accNumber);
        this.account = [...newAccountBal, accObj];
    }
}
let myBank = new Bank();
for (let i = 1; i <= 2; i++) {
    let fName = faker.person.firstName('male');
    let lname = faker.person.lastName();
    let mobile = parseInt(faker.phone.number());
    const cus = new Customer(fName, lname, 25 + i, "male", mobile, 1000 + i);
    myBank.addCustomer(cus);
    myBank.addAccNumber({ accNumber: cus.accNumber, balance: 100 * i });
}
//Bank Functionality
async function bankService(bank) {
    do {
        let service = await inquirer.prompt({
            type: "list",
            name: "select",
            message: "Please select the service",
            choices: ["View balance", "Cash Withdrawal", "Cash Deposit", "Exit"]
        });
        if (service.select == "View balance") {
            let res = await inquirer.prompt({
                type: "input",
                message: "Please enter your account number: ",
                name: "num"
            });
            let account = myBank.account.find((acc) => acc.accNumber == res.num);
            if (!account) {
                console.log("Invalid Account Number");
            }
            else {
                let name = myBank.customer.find((item) => item.accNumber == account?.accNumber);
                console.log(`Dear ${name?.firstName}, Your account Balance is PKR${account.balance}`);
            }
        }
        if (service.select == "Cash Withdrawal") {
            let res = await inquirer.prompt({
                type: "input",
                message: "Please enter your account number:",
                name: "num"
            });
            let account = myBank.account.find((acc) => acc.accNumber == res.num);
            if (!account) {
                console.log("Invalid Account Number");
            }
            else {
                let ans = await inquirer.prompt({
                    type: "number",
                    message: "Please enter amount to withdrew",
                    name: "withdrew"
                });
                if (ans.withdrew < account.balance) {
                    console.log(`Funds Insufficient Balance and your account Balance is ${account.balance}`);
                }
                let newBalance = account.balance - ans.withdrew;
                // transaction method call
                bank.transaction({ accNumber: account.accNumber, balance: newBalance });
                console.log(`Your current Balance is PKR ${newBalance}`);
            }
        }
        if (service.select == "Cash Deposit") {
            let res = await inquirer.prompt({
                type: "input",
                message: "Please enter your account number:",
                name: "num"
            });
            let account = myBank.account.find((acc) => acc.accNumber == res.num);
            if (!account) {
                console.log("Invalid Account Number");
            }
            else {
                let ans = await inquirer.prompt({
                    type: "number",
                    message: "Please enter amount to Deposit",
                    name: "withdrew"
                });
                let newBalance = account.balance + ans.withdrew;
                // transaction method call
                bank.transaction({ accNumber: account.accNumber, balance: newBalance });
                console.log(`Your current Balance is PKR ${newBalance}`);
            }
        }
        if (service.select == "Exit") {
            process.exit();
        }
    } while (true);
}
bankService(myBank);
