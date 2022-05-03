//global variables that keep track of scoreboard
let playerScore = 0;
let computerScore = 0;

function  computerPlay () {
    //generate random number between 1 and 10
    let choiceNumber = Math.floor(Math.random() * 10);
    
    let computerSelection;
    //if number from 1 to 3, rock
    if (choiceNumber <= 3) {
        computerSelection = 'rock';
    }
    //if number from 4 to 6, paper
    else if (choiceNumber > 3 && choiceNumber <= 6) {
        computerSelection = 'paper';
    }
    //if number from 7 to 10, scissors
    else computerSelection = 'scissors';
    //output randomly generated selection
    return computerSelection;

}

function playRound (playerSelection, computerSelection) {

    //check for player winning cases and update player score
    switch (playerSelection) {
        case 'rock':
            if (computerSelection == 'scissors') {
                playerScore++;
                return "You win! Rock beats scissors!";
            }
        case 'paper':
            if (computerSelection == 'rock') {
                playerScore++;
                return "You win! Paper beats rock!";
            }
        case 'scissors': 
            if (computerSelection == 'paper') {
                playerScore++
                return "You win! Scissors beat paper!";
            }
        default:
        //if not draw and not win, increment computer score and return loss message
            computerScore++;
            return `You lose!, ${computerSelection} beats ${playerSelection}`;
            
    }
    
}

function isDraw (playerSelection, computerSelection) {
    return (playerSelection == computerSelection);
}

function game() {

    let playerSelection;

    let computerSelection;

    for (let roundCount = 0; roundCount < 5; roundCount++) {
        //prompt user and treat answer
        playerSelection = prompt("What's your choice?");

        playerSelection.toLowerCase();

        //if the answer is valid, proceed
        if (playerSelection === 'rock' || 'paper' || 'scissors') {

            //generate computer choice
            computerSelection = computerPlay();
            
            if (!isDraw(playerSelection, computerSelection)) {

                //print to console result of round
                console.log(playRound(playerSelection, computerSelection));
            
                //print to console scoreboard
                console.log(`Your score: ${playerScore} - Computer Score: ${computerScore}.`);
            
                //check if someone has reached 3 points and won the game + reset scoreboard
                if (computerScore === 3) {
                    computerScore = 0;
                    playerScore = 0;
                    return console.log("The computer wins!");
                }
                else if (playerScore === 3) {
                    computerScore = 0;
                    playerScore = 0;
                    return console.log("You won!");
                }
            }
            else roundCount--;

        }
        else { //if answer is not valid, keep the remaining number of rounds and print to console error message
            roundCount--;
            console.log("Invalid choice! Your options are Rock, Paper or Scissors!");
        }
    }
}