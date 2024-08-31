#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
class Player {
    name;
    fuel = 100;
    constructor(name) {
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
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
let player = await inquirer.prompt({
    type: "input",
    name: "name",
    message: "please enter your name:"
});
// console.log(player.name);
let opponent = await inquirer.prompt({
    type: "list",
    name: "select",
    message: "select your opponent",
    choices: ["skeleton", "Assasin", "Joker"]
});
// console.log(opponent.select);
// Gather data
let p1 = new Player(player.name);
// console.log(p1);
let o1 = new Opponent(opponent.select);
do {
    // For Skeleton
    if (opponent.select == "skeleton") {
        let ask = await inquirer.prompt({
            type: "list",
            name: "opt",
            message: "select your Opponent",
            choices: ["Attack", "Drink portion", "Run for your life.."]
        });
        if (ask.opt == "Attack") {
            // console.log("Attack....");
            let num = Math.floor(Math.random() * 2);
            // console.log(num);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${chalk.bold.red(p1.name)} fuel = ${p1.fuel}`);
                console.log(`${chalk.bold.green(o1.name)} fuel = ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log(chalk.bold.red.italic("You Loose! Better luck next time."));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(`${chalk.bold.red(o1.name)} fuel = ${o1.fuel}`);
                console.log(`${chalk.bold.green(p1.name)} fuel = ${p1.fuel}`);
                if (o1.fuel <= 0) {
                    console.log(chalk.bold.red.italic("Congratulations! You Win."));
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink portion") {
            // console.log("Drink");
            p1.fuelIncrease();
            console.log(chalk.bold.italic.green(`You drink health portion! your health is ${p1.fuel}`));
        }
        if (ask.opt == "Run for your life..") {
            // console.log("Run...");
            console.log(chalk.bold.red.italic("You Loose! Better luck next time."));
            process.exit();
        }
    }
    // For Assasin
    if (opponent.select == "Assasin") {
        let ask = await inquirer.prompt({
            type: "list",
            name: "opt",
            message: "select your Opponent",
            choices: ["Attack", "Drink portion", "Run for your life.."]
        });
        if (ask.opt == "Attack") {
            // console.log("Attack....");
            let num = Math.floor(Math.random() * 2);
            // console.log(num);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${chalk.bold.red(p1.name)} fuel = ${p1.fuel}`);
                console.log(`${chalk.bold.green(o1.name)} fuel = ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log(chalk.bold.red.italic("You Loose! Better luck next time."));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(`${chalk.bold.red(o1.name)} fuel = ${o1.fuel}`);
                console.log(`${chalk.bold.green(p1.name)} fuel = ${p1.fuel}`);
                if (o1.fuel <= 0) {
                    console.log(chalk.bold.red.italic("Congratulations! You Win."));
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink portion") {
            // console.log("Drink");
            p1.fuelIncrease();
            console.log(chalk.bold.italic.green(`You drink health portion! your health is ${p1.fuel}`));
        }
        if (ask.opt == "Run for your life..") {
            // console.log("Run...");
            console.log(chalk.bold.red.italic("You Loose! Better luck next time."));
            process.exit();
        }
    }
    // For Joker
    if (opponent.select == "Joker") {
        let ask = await inquirer.prompt({
            type: "list",
            name: "opt",
            message: "select your Opponent",
            choices: ["Attack", "Drink portion", "Run for your life.."]
        });
        if (ask.opt == "Attack") {
            // console.log("Attack....");
            let num = Math.floor(Math.random() * 2);
            // console.log(num);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${chalk.bold.red(p1.name)} fuel = ${p1.fuel}`);
                console.log(`${chalk.bold.green(o1.name)} fuel = ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log(chalk.bold.red.italic("You Loose! Better luck next time."));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(`${chalk.bold.red(o1.name)} fuel = ${o1.fuel}`);
                console.log(`${chalk.bold.green(p1.name)} fuel = ${p1.fuel}`);
                if (o1.fuel <= 0) {
                    console.log(chalk.bold.red.italic("Congratulations! You Win."));
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink portion") {
            // console.log("Drink");
            p1.fuelIncrease();
            console.log(chalk.bold.italic.green(`You drink health portion! your health is ${p1.fuel}`));
        }
        if (ask.opt == "Run for your life..") {
            // console.log("Run...");
            console.log(chalk.bold.red.italic("You Loose! Better luck next time."));
            process.exit();
        }
    }
} while (true);
