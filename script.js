 //keeping score
 let wins = 0;
 let losses = 0;
 let ties = 0;
 
for(let i = 0; i < 5; i++) {
    //getting user input
    let playerSelection = prompt("Please enter rock, paper, or scissors: ");

    function computerPlay() { //randomizing computer selection
        let random = Math.floor(Math.random()* 3) + 1;
        if (random === 1) {
            computerSelection = "Rock";
        } else if (random === 2) {
            computerSelection = "Paper";
        } else if (random === 3){
            computerSelection =  "Scissors";
        }
        return computerSelection;
    }
    computerPlay();
    console.log(playerSelection)
    console.log(computerSelection)

   

    function play(computerSelection, playerSelection) {
        // checking for tie
        computerSelection = computerSelection.toUpperCase();
        playerSelection = playerSelection.toUpperCase();
        let areEqual = computerSelection === playerSelection;
        
        

        //evaluating answers to find result of game
        if (areEqual === true) {
            ties++;
            return "Tie! Play again.";
        } else if (computerSelection === "ROCK" && playerSelection === "SCISSORS") {
            losses++;
            return "Rock beats scissors! The computer wins. Play again.";
        } else if (computerSelection === "PAPER" && playerSelection === "ROCK") {
            losses++;
            return "Paper beats rock! The computer wins. Play again.";
        } else if (computerSelection === "SCISSORS" && playerSelection === "PAPER") {
            losses++;
            return "Scissors beat paper! The computer wins. Play again.";
        } else if (computerSelection === "ROCK" && playerSelection === "PAPER") {
            wins++;
            return "Paper beats rock! You win. Play again.";
        } else if (computerSelection === "PAPER" && playerSelection === "SCISSORS") {
            wins++;
            return "Scissors beat paper! You win. Play again.";
        } else if (computerSelection === "SCISSORS" && playerSelection === "ROCK") {
            wins++;
            return "Rock beats scissors! You win. Play again.";
        } 
    }
    console.log(play(computerSelection,playerSelection))
}
console.log("Wins: " + wins + ", Losses: " + losses + ", and Ties: " + ties) 
        
