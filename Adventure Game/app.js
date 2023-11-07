import inquirer from "inquirer";
import chalk from "chalk";
class Player {
    constructor(name) {
        this.fuel = 100;
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
class Opponent {
    constructor(name) {
        this.fuel = 100;
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
let player = await inquirer.prompt({
    name: "name",
    type: "input",
    message: "Enter your name"
});
let opponent = await inquirer.prompt({
    name: "select",
    type: "list",
    message: "Select your opponent",
    choices: ["Skeleton", "Zombie", "Ra-one"]
});
let p1 = new Player(player.name);
let o1 = new Player(opponent.select);
do {
    if (opponent.select == "Skeleton") {
        let ask = await inquirer.prompt({
            type: "list",
            message: "Select the options",
            choices: ["Attack", "Drink", "Out"],
            name: "opt"
        });
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.bold.red("You are out from Game"));
                    process.exit();
                }
                ;
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.bold.green("You Won"));
                    process.exit();
                }
            }
        }
        ;
        if (ask.opt == "Drink") {
            p1.fuelIncrease();
            console.log(`${chalk.bold.green(p1.name)} fuel is ${chalk.bold.green(p1.fuel)}`);
        }
        ;
        if (ask.opt == "Out") {
            console.log(chalk.bold.red("You are out from Game"));
        }
        ;
    }
    if (opponent.select == "Zombie") {
        let ask = await inquirer.prompt({
            type: "list",
            message: "Select the options",
            choices: ["Attack", "Drink", "Out"],
            name: "opt"
        });
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.bold.red("You are out from Game"));
                    process.exit();
                }
                ;
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.bold.green("You Won"));
                    process.exit();
                }
            }
        }
        ;
        if (ask.opt == "Drink") {
            p1.fuelIncrease();
            console.log(`${chalk.bold.green(p1.name)} fuel is ${chalk.bold.green(p1.fuel)}`);
        }
        ;
        if (ask.opt == "Out") {
            console.log(chalk.bold.red("You are out from Game"));
        }
        ;
    }
    if (opponent.select == "Ra-one") {
        let ask = await inquirer.prompt({
            type: "list",
            message: "Select the options",
            choices: ["Attack", "Drink", "Out"],
            name: "opt"
        });
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.bold.red("You are out from Game"));
                    process.exit();
                }
                ;
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.bold.green("You Won"));
                    process.exit();
                }
            }
        }
        ;
        if (ask.opt == "Drink") {
            p1.fuelIncrease();
            console.log(`${chalk.bold.green(p1.name)} fuel is ${chalk.bold.green(p1.fuel)}`);
        }
        ;
        if (ask.opt == "Out") {
            console.log(chalk.bold.red("You are out from Game"));
        }
        ;
    }
} while (true);
