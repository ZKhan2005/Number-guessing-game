#! /usr/bin/env node

import inquirer from "inquirer";

//1. computer will generate a random number
//2. user input for guessing number
//3. compare users input with computer generated number and show result

 
type ansType = {
    userGuess: number
}


const systemGeneratedNo = Math.floor(Math.random()+10);

const answers: ansType = await inquirer.prompt([
    {
      type: "number", 
      name: "userGuess",
      message: "Guess the number b/w 1-10: "
        
      }, 
])
const {userGuess} = answers;

    console.log(userGuess, "userGuess", systemGeneratedNo, `SYs`);
    if(userGuess === systemGeneratedNo){
    
    console.log(`\nCONGRATULATION !! You guessed the right number \n You Win :-) ;-D`); 
}

else{
    console.log(`\n Oops Bad Luck You guessed wrong number\n Try Again :-(`);  
}

