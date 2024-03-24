#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

const randomNumber = Math.floor(Math.random() * 10 + 1);
const answers = await inquirer.prompt([
  {
    type: "number",
    name: "guessNumber",
    message: "Guess a number between 1 to 10",
  },
]);

if (answers.guessNumber === randomNumber) {
  console.log("Congratulations! You guess right number.");
} else if (answers.guessNumber > randomNumber) {
  console.log("Your guess is high.");
} else if (answers.guessNumber < randomNumber) {
  console.log("Your guess is low.");
}