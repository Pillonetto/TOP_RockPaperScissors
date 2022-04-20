//keep track of scores as global variables
let playerScore;
let computerScore;

function computerPlay(){
    let randomNumber = Math.floor(Math.random() * 10);
    //1,2,3
    if (randomNumber <= 3) return 'rock';
    //4.5.6
    else if (randomNumber > 3 && randomNumber <= 6) return 'paper';
    //7.8.9.10
    else return 'scissors';
}

function playRound(playerSelection, computerSelection){
    //if choices are the same, game is a draw
    if (playerSelection === computerSelection) {
        return "It's a draw!";
    }
    //check for each player choice and its winning situation. Increment playerScore and log win message
    switch(playerSelection) {
        case 'rock': 
            if (computerSelection === 'scissors') {
                playerScore++;
                return "You win! Rock beats scissors."
            }
        case 'paper':
            if (computerSelection === 'rock') {
                playerScore++;
                return "You win! Paper beats rock."
            }
        case 'scissors':
            if (computerSelection === 'paper') {
                playerScore++;
                return "You win! Scissors beat paper."
            }
        //if winning situation is not fulfilled, it's a loss! increment computerScore and log loss message
        default:
            let compSelec2 = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);
            computerScore++;
            return `You lose! ${compSelec2} beats ${playerSelection}.`
    }
}

function game() {
    //reset scoreboard for each game
    let playerSelection;
    playerScore = 0;
    let computerSelection;
    computerScore = 0;
    //iterate over 5 rounds
    for(let roundCount = 0; roundCount < 5; roundCount++) {
        //get player choice
        playerSelection = prompt("What's your choice?");
        //if playerSelection is valid, proceed
        if (playerSelection === 'rock' || 'paper' || 'scissors'){
            computerSelection = computerPlay();
            //if draw, make sure 5 rounds will still be played
            if (playerSelection == computerSelection) roundCount--;
            //print round result and scoreboard
            console.log(playRound(playerSelection, computerSelection));
            console.log(`Your score: ${playerScore} - Computer's score: ${computerScore}`);
        }
        //if player selection is invalid, return error message
        else { 
            return console.log("Invalid choice! Your options are rock, paper, scissors!");
        }
        //if game has ended, check for winner and print result
        if(roundCount == 4) {
            (playerScore > computerScore) ? console.log("You are the jankenpo champion!") : console.log("The computer won. Better luck next time!");
        }

    }
    return;
}