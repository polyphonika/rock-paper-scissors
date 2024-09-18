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
        hand = 'rock';
    } else if (randNumber == 1) {
        hand = 'paper';
    } else {
        hand = 'scissors';
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
    if (humanChoice === 'paper') {
        if (computerChoice === 'rock') {
            console.log('Human wins! Paper beats rock');            
            // humanScore++;
            winner = 'human';
            return winner;
            
        } else if (computerChoice === 'scissors') {
            console.log('Computer wins! Scissors beats paper');
            winner = 'computer';
        } else {
            console.log('Round tied, paper chosen by both');
            winner = 'tie';
            }
        // console.log("from PR: hs: " + humanScore + " cs: " + computerScore);
        return winner;
    }

    if (humanChoice === 'rock') {
        if (computerChoice === 'scissors') {
                console.log('Human wins! Rock beats scissors');            
                winner = 'human';
        } else if (computerChoice === 'paper') {
            console.log('Computer wins! Paper beats rock');
            winner = 'computer';
        } else {
            console.log('Round tied, rock chosen by both');
            winner = 'tie';
            
        }
        // console.log("from PR: hs: " + humanScore + " cs: " + computerScore);
        return winner;
    }

    if (humanChoice === 'scissors') {
        if (computerChoice === 'paper') {
            console.log('Human wins! Scissors beats paper');            
            winner = 'human';
        } else if (computerChoice === 'rock') {
            console.log('Computer wins! Rock beats Scissors');
            winner = 'computer';
        } else {
            console.log('Round tied, scissors chosen by both');
            winner = 'tie';
            
        }
        // console.log("from PR: hs: " + humanScore + " cs: " + computerScore);
        return winner;
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

buttons.forEach(button => {
    button.addEventListener('click', e => {
        // console.log(e.target.textContent);
        playRound(e.target.textContent, getComputerChoice());

    });
});




// playGame(5, 0, 0);




