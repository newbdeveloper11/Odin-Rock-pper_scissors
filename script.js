let documentBody = document.querySelector("body");
let rockPaperScisscorsButtons = document.querySelectorAll("li button")
let displayDiv = document.createElement("div");
let resultDisplay = document.querySelector(".display-result");
displayDiv.setAttribute("style", "background: #FAF1E6; display: flex; flex: 1; padding: 30px; justify-content: center; font-size: 40px;");

let humanScore = 0;
let computerScore = 0;


let refreshbutton = document.createElement("button");
refreshbutton.textContent = "Play Again?";
refreshbutton.setAttribute("style", "width: 100px; height: 50px; padding: 10px; background: #F38C79; margin-top: 50px;");
refreshbutton.addEventListener("click", () =>{
   window.location.reload();
   console.log("clicked");
})


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
    human = human.toLowerCase()
    if(human == computer){
        displayDiv.textContent = `You: ${human} Vs. Computer: ${computer}\n    Score: DRAW`;
    }
    else if(human == "rock" && computer == "paper"){
        computerScore++;
        displayDiv.textContent = `${computer} beats ${human}. Computer WINS.  Current score. You: ${humanScore} Vs Computer: ${computerScore}`;
        
    }
    else if(human == "paper" && computer == "scissors"){
        console.log(`${computer} beats ${human}. Computer  WIN`)
        computerScore++;
        displayDiv.textContent = `${computer} beats ${human}. Computer  WIN. Current score. You: ${humanScore} Vs Computer: ${computerScore}`;
        
    }
    else if(human == "scissors" && computer == "rock"){
        computerScore++;
        displayDiv.textContent = `${computer} beats ${computer}. Computer WINS.  Current score. You: ${humanScore} Vs Computer: ${computerScore}`;
        
    }
    else if(human == "rock" && computer == "scissors"){
        humanScore++;
        displayDiv.textContent = `${human} beats ${computer}. You WIN  Current score. You: ${humanScore} Vs Computer: ${computerScore} `;
        

    }
    else if(human == "paper" && computer == "rock"){
        humanScore++;
        displayDiv.textContent = `${human} beats ${computer}. You WIN.  Current score. You: ${humanScore} Vs Computer: ${computerScore}`;
        
    }
    else if(human == "scissors" && computer == "paper"){
        humanScore++;
        displayDiv.textContent = `${human} beats ${computer}. You WIN. Current score. You: ${humanScore} Vs Computer: ${computerScore}`;
    }
    else{
        console.log("Invalid input recived, check your input and try again");
    }
        
    

}




rockPaperScisscorsButtons.forEach((butt) =>{
    butt.addEventListener("click", () =>{
        if(humanScore === 5 || computerScore === 5){
            butt.disabled = true;
            //disableButtons(buttons);
            butt.setAttribute("style", "background: grey; color: grey;");
            resultDisplay.appendChild(refreshbutton);
            if(computerScore > humanScore)
                displayDiv.textContent = `Final score Computer: ${computerScore} Vs You: ${humanScore} Computer WINS`;
            else if(humanScore > computerScore){
                displayDiv.textContent = `Final score Computer: ${computerScore} Vs You: ${humanScore} You WIN`;
                displayDiv.setAttribute("style", "background: green; color: white; padding: 20px; font-size: 28px;")
            }
            else{
                displayDiv.textContent("Final Score: DRAW");
            }
        }
        else{
            playRound(butt.textContent, getComputerChoice())
            resultDisplay.appendChild(displayDiv);
            resultDisplay.firstElementChild.textContent = "";

        }
        
    
    })
})



