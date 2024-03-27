#! /usr/bin/env node
import inquirer from "inquirer";

//computer will generate a number
//User input for guessing the number
//compare the number with the computer generated number
//if the number is correct, the user wins
//if the number is incorrect, the user loses

const randomNumber=Math.floor(Math.random()*6+1);
const answer= await inquirer.prompt([
    {
        name:"userGuessednum",
        type:"number",
        message:"Enter your guessed number between 1 to 6"

    }
])
console.log(answer);
if(answer.userGuessednum===randomNumber){
    console.log("You win!");
}
else{
    console.log("You lose!");
}
 