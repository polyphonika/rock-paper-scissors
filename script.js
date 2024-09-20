console.log('Hello, World! Rock Edition');

/* PSEUDOCODE FOR getComputerChoice FUNCTION
Goal: Randomly one of the following string values: "rock", "paper", "scissors"
Use Maths.random method. This will return a value >=0 x <1

declare getComputerChoice function name
variable randNumber = math floor (maths.random * 3)
if randNumber = 0
    variable hand = rock
    else if randnumner = 1
    variable hand = paper
    else
    variable hand = scissors
return hand

*/

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

    // console.log("Random: " + randNumber);
    // console.log("Hand: " + hand);
    // will need to return the value here
    return hand
}

// getComputerChoice();

/* PSEUDOCODE for FUNCTION getHumanChoice
Description: prompt user to choose a hand, allow only for one of three inputs. if diff input, prompt again

*/

function getHumanChoice() {
    let hand = prompt('Rock, paper, scissors. What do you choose? Type r, p or s: ').toLowerCase();
    if (hand === 'r' || hand === 'p' || hand === 's') {
        // console.log("Hand is: " + hand);
        if (hand === 'r') {
            hand = 'rock';
        } else if (hand === 'p') {
            hand = 'paper';
        } else {
            hand = 'scissors';
        }
        // console.log("human choice: " + hand);
        return hand
    } else {
        console.log("incorrect hand, running again");   
        return getHumanChoice();
    }

}



// getHumanChoice();

/* PSEUDOCODE AND DESCRIPTION FOR DECLARING PLAYERS SCORE VARIABLES
declare two variables, humanScore and computerScore, init with 0
*/



/* PSEUDOCODE FOR LOGIC FOR A FUNCTION TO PLAY A SINGLE ROUND 
Description: take human and computer player choices as arguments, play a single round, increment the round winner's score and logs a winner announcement

Create a function called playRound
Define two parameters, humanChoice and computerChoice
Make function's humanChoice parameter case-insensitive so that players can input rock, ROCK, RocK etc
Write the code for playRound to console.log a string value representing the round winner, eg you lose, paper beats rock
increment the humanscore or computerscore variable base don the round winner

logic on round winning:
p > r
r > s
s > p

parity means tie round

*/

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





/* NEXT STEPS: WRITE STEP 6, SEE INSTRUCTIONS
also test above function logic with console log, make sure all working correctly

1. testing output of each function. first, computerChoice. - OK, NOW WORKING CORRECTLY
2. follow instructions to write step 6 function
    * create a function called playGame
    * move playRound and score variables so they're declared in playGame
    * play 5 rounds by calling playRound 5 times - maybe I can have a counter in the function?

*/



function playGame(rounds, humanScore, computerScore, btnChoice) {
    // let humanScore = humanScore;
    // let computerScore = computerScore;
        
    if (rounds > 0) {
        // const winner = playRound(getHumanChoice(), getComputerChoice());
        const winner = playRound(btnChoice, getComputerChoice());
        rounds--;
        if (winner === 'human') {
            humanScore++;
        } else if (winner === 'computer') {
            computerScore++;
        }
    } else {
        console.log('------------');
        console.log('Game has finished, let\'s see who won');
        console.log('------------');
        console.log(`Human score:  ${humanScore}`);
        console.log(`Computer score: ${computerScore}`);
        if (humanScore > computerScore) {
            console.log('Human is the winner!');
            } else if (humanScore < computerScore) {
            console.log('Computer is the winner');
            } else {
            console.log('Game is a tie, all players equal');
            }
    return
    }    
   

    // console.log("end of round");
    // console.log("hs: " + humanScore);
    // console.log("cs: " + computerScore);

    playGame(rounds, humanScore, computerScore);
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

buttons.forEach(button => {
    // const playerHand = document.querySelector('p.player-hand');
    button.addEventListener('click', e => {
        // console.log(e.target.textContent);
        //play game, get returned values
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
            playerScoreDisplay = playerScore;
            computerScoreDisplay = computerScore;
            tieScoreDisplay.textContent = ++tieScore;
        }
        
        roundCount++;

    });
});

// playGame(5, 0, 0);




