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

    console.log("Random: " + randNumber);
    console.log("Hand: " + hand);
    // will need to return the value here
    return
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
        console.log(hand);
        return hand
    } else {
        getHumanChoice();
    }

}

// getHumanChoice();

/* PSEUDOCODE AND DESCRIPTION FOR DECLARING PLAYERS SCORE VARIABLES
declare two variables, humanScore and computerScore, init with 0
*/

let humanScore = 0;
let computerScore = 0;

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

function playRound(humanChoice, computerChoice) {
    if (humanChoice === 'paper') {
        if (computerChoice === 'rock') {
            console.log('Human wins! Paper beats rock');            
            return humanScore++;
        } else if (computerChoice == 'scissors') {
            console.log('Computer wins! Scissors beats paper');
            return computerScore++;
        } else {
            console.log('Round tied, paper chosen by both');
            return
        }
    }

    if (humanChoice === 'rock') {
        if (computerChoice === 'scissors') {
                console.log('Human wins! Rock beats scissors');            
            return humanScore++;
        } else if (computerChoice == 'paper') {
            console.log('Computer wins! Paper beats rock');
            return computerScore++;
        } else {
            console.log('Round tied, rock chosen by both');
            return
        }
    }

    if (humanChoice === 'scissors') {
        if (computerChoice === 'paper') {
            console.log('Human wins! Scissors beats paper');            
            return humanScore++;
        } else if (computerChoice == 'rock') {
            console.log('Computer wins! Rock beats Scissors');
            return computerScore++;
        } else {
            console.log('Round tied, scissors chosen by both');
            return
        }
    }

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

/* NEXT STEPS: WRITE STEP 6, SEE INSTRUCTIONS */




