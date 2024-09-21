function getComputerChoice() {
    let randNumber = Math.floor(Math.random() * 3);
    let hand;
    if (randNumber == 0) {
        hand = 'Rock 🪨';
    } else if (randNumber == 1) {
        hand = 'Paper 📃';
    } else {
        hand = 'Scissors ✂️';
    }

    return hand
}

function playRound(humanChoice, computerChoice, humanScore, computerScore) {
    let winner;
    if (humanChoice === 'Paper 📃') {
        if (computerChoice === 'Rock 🪨') {
            console.log('Human wins! Paper beats rock');            
            // humanScore++;
            winner = 'Player';
            return {computerChoice, winner}
            
        } else if (computerChoice === 'Scissors ✂️') {
            console.log('Computer wins! Scissors beats paper');
            winner = 'Computer';
        } else {
            console.log('Round tied, paper chosen by both');
            winner = 'tie';
            }
        // console.log("from PR: hs: " + humanScore + " cs: " + computerScore);
        return {computerChoice, winner}
    }

    if (humanChoice === 'Rock 🪨') {
        if (computerChoice === 'Scissors ✂️') {
                console.log('Human wins! Rock beats scissors');            
                winner = 'Player';
        } else if (computerChoice === 'Paper 📃') {
            console.log('Computer wins! Paper beats rock');
            winner = 'Computer';
        } else {
            console.log('Round tied, rock chosen by both');
            winner = 'tie';
            
        }
        // console.log("from PR: hs: " + humanScore + " cs: " + computerScore);
        return {computerChoice, winner}
    }

    if (humanChoice === 'Scissors ✂️') {
        if (computerChoice === 'Paper 📃') {
            console.log('Human wins! Scissors beats paper');            
            winner = 'Player';
        } else if (computerChoice === 'Rock 🪨') {
            console.log('Computer wins! Rock beats Scissors');
            winner = 'Computer';
        } else {
            console.log('Round tied, scissors chosen by both');
            winner = 'tie';
            
        }
        // console.log("from PR: hs: " + humanScore + " cs: " + computerScore);
        return {computerChoice, winner}
    }

}

function btnPress(e) {
    let maxWins = 5;

    let {computerChoice, winner} = playRound(e.target.textContent, getComputerChoice());
    roundContent.textContent = roundCount;
    
    if (!playerHand) {
                    
        playerHand = document.createElement('p');
        playerHand.classList.add('player-hand');
        playerHand.textContent = `Player chose: ${e.target.textContent}`;
        document.querySelector('.played-hands').appendChild(playerHand);

        computerHand = document.createElement('p');
        computerHand.classList.add('computer-hand');
        computerHand.textContent = `Computer chose: ${computerChoice}`;
        document.querySelector('.played-hands').appendChild(computerHand);

        winningHand = document.createElement('p');
        winningHand.classList.add('winning-hand');
        winningHand.textContent = `Winner: ${winner}`;
        document.querySelector('.played-hands').appendChild(winningHand);
    }

    playerHand.textContent = `Player chose: ${e.target.textContent}`;
    computerHand.textContent = `Computer chose: ${computerChoice}`;
    winningHand.textContent = `Winner: ${winner}`;
    
    if (winner === 'Player') {
        playerScoreDisplay.textContent = ++playerScore;
        computerScoreDisplay.textContent = computerScore;
    } else if (winner === 'Computer') {
        playerScoreDisplay.textContent = playerScore;
        computerScoreDisplay.textContent = ++computerScore;
    } else {
        playerScoreDisplay.textContent = playerScore;
        computerScoreDisplay.textContent = computerScore;
        tieScoreDisplay.textContent = ++tieScore;
    }
    
    if (playerScore==maxWins || computerScore==maxWins) {        
        endGame(winner);
    }

    roundCount++;
}

function endGame(winner) {    
    confetti();

    buttons.forEach(button => {
        console.log(button);
        button.removeEventListener('click', btnPress);
        button.style.cursor = 'not-allowed';
        button.style.opacity = 0.5;
        button.style.pointerEvents = 'none';
    });

    let scoreHeader = document.querySelector('h2.score-header');
    scoreHeader.textContent = `Game over, ${winner} is the winner!`;

    let btnPlayAgain = document.createElement('button');
    btnPlayAgain.textContent = 'Play again?';
    const header = document.querySelector('header');
    header.insertAdjacentElement('afterend',btnPlayAgain);
    btnPlayAgain.addEventListener('click', () => {
        location.reload();
    })    
}

function playGameV2() {
    buttons.forEach(button => {
        // const playerHand = document.querySelector('p.player-hand');
        button.addEventListener('click', btnPress);
        
    });
}

// set up event listeners
const buttons = document.querySelectorAll('button');
let roundContent = document.querySelector('p.round-count span');
let playerHand = document.querySelector('p.player-hand');
let computerHand = document.querySelector('p.computer-hand');
let playerScoreDisplay = document.querySelector('p.player-score span');
let computerScoreDisplay = document.querySelector('p.computer-score span');
let tieScoreDisplay = document.querySelector('p.tie-score span');

let playerScore = 0;
let computerScore = 0;
let tieScore = 0;
let roundCount = 1;

playGameV2();






