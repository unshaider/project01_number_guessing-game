#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const randomNumber = Math.floor(Math.random() * 10 + 1);
console.log(chalk.blue("Welcome to the Number Guessing Game!"));
console.log(chalk.gray("I've picked a number between 1 and 10. Try to guess it!"));
let attempts = 0;
while (true) {
    attempts++;
    const answers = await inquirer.prompt([
        {
            type: "number",
            name: "guessNumber",
            message: "Enter your guess:",
        },
    ]);
    if (answers.guessNumber === randomNumber) {
        console.log(chalk.green(`Congratulations! You've guessed the number in ${attempts} attempts.`));
        break;
    }
    else if (answers.guessNumber > randomNumber) {
        console.log(chalk.red("Too high! Try again."));
    }
    else if (answers.guessNumber < randomNumber) {
        console.log(chalk.red("Too low! Try again."));
    }
}
