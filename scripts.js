
let btns = document.querySelectorAll(".btn");
let restartButton = document.querySelector('.restart');
let gameConsole = document.querySelector('.gameConsole');
let gameScore = document.querySelector('.score');

let playerScore = 0;
let computerScore = 0;

const disableButtons = () => {
    btns.forEach(btns => btns.disabled = true);
}

btns.forEach(btns => btns.addEventListener('click', function(e) {
    let choice = this.classList[1];
    gameConsole.textContent = playRound(choice, computerPlay());

    gameScore.textContent = `${playerScore} - ${computerScore}`;

    if (playerScore > 4 || computerScore > 4) {

        (playerScore == 5) ? gameConsole.textContent = "You've won! Press the button to restart" : 
        gameConsole.textContent = "You lost, better luck next time! Press the button to restart";
    
        disableButtons();
        
        restartButton.classList.remove('disabledBtn');

        restartButton.addEventListener('click', () => {
            document.location.reload();
        })
    
    }

}));


function computerPlay(){
    let randomNumber = (Math.floor(Math.random() * 9) + 1);
    //1,2,3
    if (randomNumber <= 3) return 'rock';
    //4.5.6
    else if (randomNumber > 4 && randomNumber <= 6) return 'air';
    //7.8.9
    else return 'water';
}

function playRound(playerSelection, computerSelection){
    //if choices are the same, game is a draw
    if (playerSelection === computerSelection) {
        return "It's a draw!";
    }
    
    //check for each player choice and its winning situation. Increment playerScore and log win message

    if (playerSelection === 'rock' && computerSelection === 'water') {
        playerScore++;
        return "You win! Rock beats water."
    }
    else if (playerSelection === 'air' && computerSelection === 'rock') {
        playerScore++;
        return "You win! Air beats rock."
    }
    else if (playerSelection === 'water' && computerSelection === 'air'){
        playerScore++;
        return "You win! Water beats air."
    }
    else {
        let compSelec2 = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);
        computerScore++;
        return `You lose! ${compSelec2} beats ${playerSelection}.`
    }
}


