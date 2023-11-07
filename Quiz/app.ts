import inquirer from "inquirer";
import chalk from "chalk";

const apilink :string = "https://opentdb.com/api.php?amount=5&category=17&difficulty=easy&type=multiple";


let fetchData = async (data: string) => {
    let fetchQuiz : any = await fetch(data)
    let res = await fetchQuiz.json()
    return res.results
}
let data = await fetchData(apilink);

let name = inquirer.prompt({
    name: "name",
    type: "input",
    message: "What is your name?"
})

let startQuiz =async () => {
    let score : number = 0;
   
    for (let i = 1 ; i < 5 ; i++){
        let answer = [...data[i].incorrect_answers, data[i].correct_answer]

        let ans = await inquirer.prompt({
            type: "list",
            name: "quiz",
            message: data[i].question,
            choices: answer.map((val:any)=> val),
        })
        if (ans.quiz == data[i].correct_answer){
            ++score
        }
        console.log(score)
    }
}
startQuiz()