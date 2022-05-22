let playerSelection = prompt("Please enter rock, paper, or scissors: ");
//console.log(playerSelection)
function computerPlay() {
    let random = Math.floor(Math.random()* 3) + 1;
    //console.log(com)
    if (random === 1) {
        computerSelection = "Rock";
    } else if (random === 2) {
        computerSelection = "Paper";
    } else if (random === 3){
        computerSelection =  "Scissors";
    }
    return computerSelection;
}
//console.log(computerPlay())
//console.log(computerPlay())
computerSelection = computerSelection.toUpperCase();
    //console.log(computerSelection)
    playerSelection = playerSelection.toUpperCase();
    //console.log(playerSelection)
    let areEqual = computerSelection === playerSelection;
    //console.log(areEqual)

function play(computerSelection, playerSelection) {

    if (areEqual === true) {
        return "Tie! Play again.";
    } else if (computerSelection === "ROCK" && playerSelection === "SCISSORS") {
        return "Rock beats scissors! The computer wins. Play again.";
    } else if (computerSelection === "PAPER" && playerSelection === "ROCK") {
        return "Paper beats rock! The computer wins. Play again.";
    } else if (computerSelection === "SCISSORS" && playerSelection === "PAPER") {
        return "Scissors beat paper! The computer wins. Play again.";
    } else if (computerSelection === "ROCK" && playerSelection === "PAPER") {
        return "Paper beats rock! You win. Play again.";
    } else if (computerSelection === "PAPER" && playerSelection === "SCISSORS") {
        return "Scissors beat paper! You win. Play again.";
    } else if (computerSelection === "SCISSORS" && playerSelection === "ROCK") {
        return "Rock beats scissors! You win. Play again.";
    } 
}

console.log(play(computerSelection,playerSelection))