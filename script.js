 //keeping score
 let wins = 0;
 let losses = 0;
 let ties = 0;
 

//getting user input


let playerSelection = '';
//functions to attach to event listeners instead of having user type
function playerSelectRock() {
    if (wins == 5 )  {
        winner.textContent = 'You win! Congratulations.';
    } else if (losses == 5) {
        winner.textContent = 'The computer won. Sorry!';
    } else {
        playerSelection = 'rock';
        display.textContent = play(computerPlay(),playerSelection);
        score.textContent = 'Score: ' + wins + ' wins, ' + losses + ' losses, and ' + ties + ' ties';
    }
}
function playerSelectPaper() {
    if (wins == 5 )  {
        winner.textContent = 'You win! Congratulations.';
    } else if (losses == 5) {
        winner.textContent = 'The computer won. Sorry!';
    } else {
        playerSelection = 'paper';
        display.textContent = play(computerPlay(),playerSelection);
        score.textContent = 'Score: ' + wins + ' wins, ' + losses + ' losses, and ' + ties + ' ties';
    }
}
function playerSelectScissors() {
    if (wins == 5 )  {
        winner.textContent = 'You win! Congratulations.';
    } else if (losses == 5) {
        winner.textContent = 'The computer won. Sorry!';
    } else {
        playerSelection = 'scissors';
        display.textContent = play(computerPlay(),playerSelection);
        score.textContent = 'Score: ' + wins + ' wins, ' + losses + ' losses, and ' + ties + ' ties';
    }
}

//adding listeners

const rock = document.querySelector('#rock');
rock.addEventListener('click', playerSelectRock);

const paper = document.querySelector('#paper');
paper.addEventListener('click',playerSelectPaper);

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click',playerSelectScissors);



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


let message = '';

function play(computerSelection, playerSelection) {
    // checking for tie
    computerSelection = computerSelection.toUpperCase();
    playerSelection = playerSelection.toUpperCase();
    let areEqual = computerSelection === playerSelection;
    
    

    //evaluating answers to find result of game
    if (areEqual === true) {
        ties++;
        message = "Tie! Play again.";
        
    } else if (computerSelection === "ROCK" && playerSelection === "SCISSORS") {
        losses++;
        message = "Rock beats scissors! The computer wins. Play again.";
        
    } else if (computerSelection === "PAPER" && playerSelection === "ROCK") {
        losses++;
        message ="Paper beats rock! The computer wins. Play again.";
        
    } else if (computerSelection === "SCISSORS" && playerSelection === "PAPER") {
        losses++;
        message ="Scissors beat paper! The computer wins. Play again.";
        
    } else if (computerSelection === "ROCK" && playerSelection === "PAPER") {
        wins++;
        message = "Paper beats rock! You win. Play again.";
        
    } else if (computerSelection === "PAPER" && playerSelection === "SCISSORS") {
        wins++;
        message = "Scissors beat paper! You win. Play again.";
        
    } else if (computerSelection === "SCISSORS" && playerSelection === "ROCK") {
        wins++;
        message = "Rock beats scissors! You win. Play again.";
        
    } 
    return message;
}


//DOM manipulation to display results
const container = document.querySelector('#container');

const content = document.createElement('div');  
content.classList.add('content');

const score = document.createElement('p');
score.classList.add('score');
score.textContent = 'Score: ' + wins + ' wins, ' + losses + ' losses, and ' + ties + ' ties';
content.appendChild(score);

const display = document.createElement('p');
display.classList.add('display');
content.appendChild(display);

const winner = document.createElement('p');
winner.classList.add('winner');
content.appendChild(winner);

container.appendChild(content);
