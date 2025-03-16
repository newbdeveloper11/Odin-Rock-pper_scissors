
let humanScore = 0;
let computerScore = 0;


function getComputerChoice(){
   //Generates a random number between 0 and 2 and returns either
   //rock, paper, or scissors depending on the numbers 0, 1, 2
   let choice = parseInt(Math.random() * 3)
   let result;
   if(choice == 0){
     result = "rock"
   }
   else if(choice == 1){
     result = "paper"
   }
   else{
     result = "scissors"
   }
  return result.toLowerCase()  
}

//getComputerChoice()

function getHumanChoice(){
    //Prompts a user for a response and returns the user response in lowercsae
    //Expected response are rock, paper, scissors

    let result
    let humanChoice = prompt("Enter rock, paper, scissors: ").toLowerCase()
    if(humanChoice == "rock"){
        result = "rock"
    }
    else if(humanChoice == "paper"){
        result = "paper"
    }
    else if(humanChoice == "scissors"){
        result = "scissors"
    }
    else{
        console.log("Invalid input")
    }
    return result

}



function playRound(human, computer){
    //Based on the rock paper scissors game
    //Compares the user inputs to that of the computer and returns the winner

    if(human == computer){
        console.log(` You = ${human} Computer = ${computer} DRAW no winner`)
    }
    else if(human == "rock" && computer == "paper"){
        console.log(`${computer} beats ${human}. Computer WINS`)
        computerScore++
    }
    else if(human == "paper" && computer == "scissors"){
        console.log(`${computer} beats ${human}. Computer  WIN`)
        computerScore++
    }
    else if(human == "scissors" && computer == "rock"){
        console.log(`${computer} beats ${computer}. Computer WINS`)
        computerScore++
    }
    else if(human == "rock" && computer == "scissors"){
        console.log(`${human} beats ${computer}. Computer WINS`)
        humanScore++

    }
    else if(human == "paper" && computer == "rock"){
        console.log(`${human} beats ${computer}. You WIN`)
        humanScore++
    }
    else if(human == "scissors" && computer == "paper"){
        console.log(`${human} beats ${computer}. Computer WINS`)
        humanScore++
    }
    else{
        console.log("Invalid input recived, check your input and try again")
    }
        
    

}

function playGame(){
    let rounds = parseInt(prompt("How many rounds do you want to play: ")) 
    for(let i = 1; i <= rounds; i++){
        let urs = getHumanChoice()
        let computer = getComputerChoice()
        console.log(`ROUND: ${i}`)
        playRound(urs, computer)
        
        console.log(`Current Score\nComputer =  ${computerScore}\nYou = ${humanScore}`)
       
    }
    
    if (computerScore > humanScore)    
        console.log(`Computer WINS with a total score of: ${computerScore} vs Your score of: ${humanScore}`)
    else if(computerScore < humanScore)
        console.log(`YOU WIN with a total score of: ${humanScore} vs Computer score of: ${computerScore}`)
    else
        console.log("Final score: DRAW no winner")
}

playGame()