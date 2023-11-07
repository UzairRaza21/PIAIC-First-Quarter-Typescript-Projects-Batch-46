import inquirer from "inquirer";

class Student {
    name: string;
    constructor(n:string){
        this.name = n;
    }
};

class Person{
    student: Student[] = [];
    addStudent(obj:any){
        this.student.push(obj);
    }
};

const person = new Person();

async function programtart(person: Person) {
    console.log("Welcome Guest");

    const ans = await inquirer.prompt({
        type: "list",
        message: "Whom would like to talk with?",
        name: "select", 
        choices: ["Ahmed", "Ali"]
    })
    if(ans.select == "Ahmed"){
        console.log("Hello, Ahmed is here to assist you")
    }
    if(ans.select == "Ali"){
        const ans = await inquirer.prompt({
            type: "input",
            message: "Ali",
        });
    }
};

programtart(person)
