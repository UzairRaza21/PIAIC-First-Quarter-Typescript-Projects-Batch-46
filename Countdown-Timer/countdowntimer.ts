import inquirer from "inquirer";
import {differenceInSeconds} from "date-fns";

const res = await inquirer.prompt({
    type: "number",
    name: "userInput",
    message: "How many seconds timer will run?",
    validate: (input)=>{
        if(isNaN(input)){
            return "please enter vald number"
        }else if (input > 60){
            return "Please enter second with 60"
        }else {
            return true
        }
    }
});

let input = res.userInput


function startTime(val:number){
    const initialTime = new Date().setSeconds(new Date().getSeconds()+val)
    const intervalTime = new Date(initialTime)
    setInterval(()=> {
        const currentTime = new Date();
        const timeDiff = differenceInSeconds(intervalTime, currentTime);
        if(timeDiff <= 0){
            console.log("Timer is expired");
            process.exit();
        }
        const min = Math.floor( (timeDiff % (3600*24))/3600);
        const sec = Math.floor(timeDiff % 60);
        console.log(`${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`)
    }, 1000)
};

startTime(input);