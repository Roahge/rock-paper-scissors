const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
const outcomeDiv = document.querySelector(".outcome");
let playerScore = 0;
let computerScore = 0;
const playerScoreSpan = document.querySelector(".player-score");
const computerScoreSpan = document.querySelector(".computer-score");




function getComputerChoice() {
    let randomNum = Math.ceil(Math.random() * 3);
    switch(randomNum) {
        case(1): return "ROCK"
        break;
        case(2): return "PAPER"
        break;
        case(3): return "SCISSORS"
        break;
    }
}




function playRound(playerSelection, computerSelection) {
    if (playerSelection.toUpperCase() == "ROCK" && computerSelection == "SCISSORS") {
        playerScore++;
        const p = document.createElement('p');
        p.innerText =  "You win! Rock beats Scissors!";
        outcomeDiv.appendChild(p);
    } else
    if (playerSelection.toUpperCase() == "PAPER" && computerSelection == "ROCK") {
        playerScore++;
        const p = document.createElement('p');
        p.innerText =  "You win! Paper beats Rock!";
        outcomeDiv.appendChild(p);
    } else
    if (playerSelection.toUpperCase() == "SCISSORS" && computerSelection == "PAPER") {
        playerScore ++;
        const p = document.createElement('p');
        p.innerText =  "You win! Scissors beats Paper!";
        outcomeDiv.appendChild(p);
    } else
    if (playerSelection.toUpperCase() == "ROCK" && computerSelection == "PAPER") {
        computerScore ++;
        const p = document.createElement('p');
        p.innerText =  "You lose! Paper beats Rock!";
        outcomeDiv.appendChild(p);
    } else
    if (playerSelection.toUpperCase() == "PAPER" && computerSelection == "SCISSORS") {
        computerScore ++;
        const p = document.createElement('p');
        p.innerText =  "You lose! Scissors beats Paper!";
        outcomeDiv.appendChild(p);
    } else
    if (playerSelection.toUpperCase() == "SCISSORS" && computerSelection == "ROCK") {
        computerScore ++;
        const p = document.createElement('p');
        p.innerText = "You lose! Rock beats Scissors!";
        outcomeDiv.appendChild(p);
    } else {
        const p = document.createElement('p');
        p.innerText = "It's a tie!";
        outcomeDiv.appendChild(p);
    } 
}

const checkWinner = (playerScore, computerScore) => {
    if(playerScore === 5) {
        const h2 = document.createElement('h2');
        h2.classList.add('player-won');
        h2.innerText = `Great job! You beat the computer ${playerScore} to ${computerScore}!`;
        outcomeDiv.append(h2);
    }

    if(computerScore === 5) {
        const h2 = document.createElement('h2');
        h2.classList.add('computer-won');
        h2.innerText = `Sorry! You lost to the computer ${playerScore} to ${computerScore}!`;
        outcomeDiv.append(h2);
    }
}

const updateScore = (playerScore, computerScore) => {
    playerScoreSpan.innerText = `Player Score: ${playerScore}                    `;
    computerScoreSpan.innerText = `Computer Score: ${computerScore}                    `;
}

rockButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = 'rock';
    playRound(playerSelection, computerSelection);
    updateScore(playerScore, computerScore);
    checkWinner(playerScore, computerScore);
});

paperButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = 'paper';
    playRound(playerSelection, computerSelection);
    updateScore(playerScore, computerScore);
    checkWinner(playerScore, computerScore);
});

scissorsButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = 'scissors';
    playRound(playerSelection, computerSelection);
    updateScore(playerScore, computerScore);
    checkWinner(playerScore, computerScore);
});