function getComputerChoice() {
    let choice = Math.random();
    if (choice >= 0 && choice <= 1/3) {
        return "rock";
    }   else if (choice > 1/3 && choice <= 2/3) {
        return "paper";
    }   else {
        return "scissors";
    }
}

/* console.log(getComputerChoice()) */

function getHumanChoice() {
    let choice = prompt("Please enter rock, paper or scissors");
    return choice;
}

/* console.log(getHumanChoice()) */
let humanScore = 0;
let computerScore = 0;



function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
         console.log("It is a draw!");
    }   else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("The computer wins!");
        computerScore = computerScore + 1;

    }   else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win!");
        humanScore = humanScore + 1;
        

    }   else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win!");
        humanScore = humanScore + 1;

    }   else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("The computer wins!");
        computerScore = computerScore + 1;
        
    }   else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("The computer wins!");
        computerScore = computerScore + 1;

    }   else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win!");
        humanScore = humanScore + 1;
    }
}


function playGame() {
    console.log("ROUND 1")
    playRound(getHumanChoice(), getComputerChoice());
    console.log("Your score is " + humanScore);
    console.log("Computer score is " + computerScore);

    console.log("ROUND 2")
    playRound(getHumanChoice(), getComputerChoice());
    console.log("Your score is " + humanScore);
    console.log("Computer score is " + computerScore);

    console.log("ROUND 3")
    playRound(getHumanChoice(), getComputerChoice());
    console.log("Your score is " + humanScore);
    console.log("Computer score is " + computerScore);

    console.log("ROUND 4")
    playRound(getHumanChoice(), getComputerChoice());
    console.log("Your score is " + humanScore);
    console.log("Computer score is " + computerScore);

    console.log("ROUND 5")
    playRound(getHumanChoice(), getComputerChoice());
    console.log("Your score is " + humanScore);
    console.log("Computer score is " + computerScore);

    if (humanScore > computerScore) {
        console.log("You win the game! Congratulations!");
    }   else console.log("You lose the game! better luck next time!");

}

playGame();