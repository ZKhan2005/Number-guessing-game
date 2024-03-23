#! /usr/bin/env node
import inquirer from "inquirer";
const systemGeneratedNo = Math.floor(Math.random() + 10);
const answers = await inquirer.prompt([
    {
        type: "number",
        name: "userGuess",
        message: "Guess the number b/w 1-10: "
    },
]);
const { userGuess } = answers;
console.log(userGuess, "userGuess", systemGeneratedNo, `SYs`);
if (userGuess === systemGeneratedNo) {
    console.log(`\nCONGRATULATION !! You guessed the right number \n You Win :-) ;-D`);
}
else {
    console.log(`\n Oops Bad Luck You guessed wrong number\n Try Again :-(`);
}
