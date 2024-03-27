#! /usr/bin/env node
import inquirer from "inquirer";
const RandomNumber = Math.floor(Math.random() * 10 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1_10:",
    },
]);
if (answer.userGuessedNumber === RandomNumber) {
    console.log("Congratulations! You guessed Right");
}
else {
    console.log("You guessed wrong number");
}
