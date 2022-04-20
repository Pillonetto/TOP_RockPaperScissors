let playerScore, computerScore;

function  computerPlay () {
    let choiceNumber = Math.floor(Math.random() * 10);
    
    let computerSelection;

    if (choiceNumber <= 3) {
        computerSelection = 'rock';
    }
    
    else if (choiceNumber > 3 && choiceNumber <= 6) {
        computerSelection = 'paper';
    }

    else computerSelection = 'scissors';

    return computerSelection;

}

function playRound (playerSelection, computerSelection) {


    if (playerSelection == computerSelection) return "It's a draw!";

    switch (playerSelection){
        case 'rock':
            if (computerSelection == 'scissors') return "You win! Rock beats scissors!";
            playerScore++;
        case 'paper':
            if (computerSelection == 'rock') return "You win! Paper beats rock!";
            playerScore++;
        case 'scissors': 
            if (computerSelection == 'paper') return "You win! Scissors beat paper!";
            playerScore++;
    }

    computerScore++;
    return `You lose!, ${computerSelection} beats ${playerSelection}`;
}

function game() {
    let gameResult;

    let playerSelection;

    let computerSelection;

    for (let roundCount = 0; roundCount < 5; roundCount++) {
        playerSelection = prompt("What's your choice?");

        playerSelection.toLowerCase();

        if (playerSelection != 'rock' || 'paper' || 'scissors') {
            roundCount--;
            return console.log("Invalid choice! Your options are Rock, Paper or Scissors!")
        }

        computerSelection = computerPlay();

        console.log(playRound(playerSelection, computerSelection));
        return console.log(`Your score: ${playerScore} - Computer Score: ${computerScore}.`)

    }

    return 0;
    
}