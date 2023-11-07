let userName: string = "uzairraza";
let password : number = 1234;



import inquirer from "inquirer";


let accountHolder = await inquirer.prompt([
    {
        message: "Enter your User-name",
        type: "input",
        name: "accountTitle",
    },
    {
        message: "Enter your Password",
        type: "number",
        name: "PIN"
    },
]);
do{
if (accountHolder.accountTitle = userName && accountHolder.PIN == password){
    let availableBalance: any;
    let accountHolder = await inquirer.prompt({
        message: " Select Option",
        type: "list",
        choices: ["Cash Deposit", "Cash Withdrawal", "Balance Inquiry", "Exit"],
        name: "ATMOption"
    })
    
    if(accountHolder.ATMOption === "Cash Deposit"){
        let balance = await inquirer.prompt(
            {
                message: "Enter amount to deposit",
                type: "number",
                name: "num1",
            });
        let availableBalance = balance.num1;
        console.log("Your available Balance is " + availableBalance); 
    } 
        
        else if (accountHolder.ATMOption === "Cash Withdrawal" ){
     let balance = await inquirer.prompt(
        {
            message: "Enter amount to withdraw",
            type: "number",
            name: "num2",
        });
        let availableBalance:any = function Subtract(){availableBalance - balance.num2}
        console.log("Your available Balance is " + availableBalance);
        
}else if (accountHolder.ATMOption === "Balance Inquiry"){

    console.log("Your available Balance is "+ availableBalance);
}else if(accountHolder.ATMOption === "Exit"){
    process.exit();
}}

else{
    console.log("Kindly enter correct Password or Username")
}
}
while(true)