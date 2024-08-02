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

getComputerChoice();




