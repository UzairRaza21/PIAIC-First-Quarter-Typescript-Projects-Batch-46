import inquirer from "inquirer";
// to do array
let todos = [];
//todo function
async function createTodo(arr) {
    do {
        let userInput = await inquirer.prompt({
            type: "list",
            message: "Select Operation",
            choices: ["Add", "Update", "View", "Delete"],
            name: "select"
        });
        if (userInput.select == "Add") {
            let addTodo = await inquirer.prompt({
                type: "input",
                message: "Add Item",
                name: "add"
            });
            arr.push(addTodo.add);
            console.log(todos);
        }
        ;
        if (userInput.select == "Update") {
            let updateTodo = await inquirer.prompt({
                type: "list",
                message: "Select item for update",
                choices: todos.map(item => item),
                name: "update"
            });
            let addTodo = await inquirer.prompt({
                type: "input",
                message: "Add Item",
                name: "add"
            });
            let newtodo = todos.filter(val => val !== updateTodo.update);
            todos = [...newtodo, addTodo.add];
            console.log(todos);
        }
        ;
        if (userInput.select == "View") {
            console.log(todos);
        }
        ;
        if (userInput.select == "Delete") {
            let deleteTodo = await inquirer.prompt({
                type: "list",
                message: "Select item for update",
                choices: todos.map(item => item),
                name: "del"
            });
            let newtodo = todos.filter(val => val !== deleteTodo.del);
            todos = [...newtodo];
            console.log(todos);
        }
        ;
    } while (true);
}
createTodo(todos);
