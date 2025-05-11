const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const results = document.querySelector("#results");
const gameResults = document.querySelector("#game");


const MAX_ROUNDS = 5;
let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;



rock.addEventListener("click", function () {
    playRound("rock", getComputerChoice());
});
paper.addEventListener("click", function() {
    playRound("paper", getComputerChoice());
});

scissors.addEventListener("click", function() {
    playRound("scissors", getComputerChoice());
});






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




function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        results.textContent = "It is a draw!";
        roundsPlayed += 1;
    }   else if (humanChoice === "rock" && computerChoice === "paper") {
        results.textContent = "The computer wins!"; 
        computerScore = computerScore + 1;
        roundsPlayed += 1;

    }   else if (humanChoice === "rock" && computerChoice === "scissors") {
        results.textContent = "You win!";
        humanScore = humanScore + 1;
        roundsPlayed += 1;
        

    }   else if (humanChoice === "paper" && computerChoice === "rock") {
        results.textContent = "You win!";
        humanScore = humanScore + 1;
        roundsPlayed += 1;

    }   else if (humanChoice === "paper" && computerChoice === "scissors") {
        results.textContent = "The computer wins!";
        computerScore = computerScore + 1;
        roundsPlayed += 1;
        
    }   else if (humanChoice === "scissors" && computerChoice === "rock") {
        results.textContent = "The computer wins!";
        computerScore = computerScore + 1;
        roundsPlayed += 1;

    }   else if (humanChoice === "scissors" && computerChoice === "paper") {
        results.textContent = "You win!"
        humanScore = humanScore + 1;
        roundsPlayed += 1;
    }
    checkGameOver();
}




function checkGameOver() {
    if (roundsPlayed >= MAX_ROUNDS) {
        if (humanScore > computerScore) {
            gameResults.textContent = "Congratulations you win! your'e AWESOME!";
        }   else if (humanScore === computerScore) {
            gameResults.textContent = "It's a draw!";
        }   else if (computerScore > humanScore) {
            gameResults.textContent = "You lose! better luck next time!"
        }
    }
    disableButtons();
}



function disableButtons () {
    rock.disableButtons = true;
    paper.disableButtons = true;
    scissors.disableButtons = true;
}