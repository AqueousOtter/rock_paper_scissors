/*  Rock, Paper, Scissors
    Odin Project
    Dustin Brown 05/22/2021
*/
//random function for computer (0,1,2)
function computerRandom(){
    return Math.floor(Math.random() * 3);
}

//computer play function
//randomly returns rock, paper, or scissors
function computerPlay(){
    let computerMove= computerRandom();
    let computerChoice;

    switch (computerMove){
        case 0:
            computerChoice = "Rock";
            break;
        case 1:
            computerChoice = "Paper";
            break;
        case 2:
            computerChoice = "Scissors";
            break;
        default:
            computerChoice = "Rock"
    }
    return computerChoice;

}

//play round function: two parameters case insensitive "playerSelection", "computerSelection"
//return string winner
function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    let message;
    let winner = false;

    //if statements for comparing, separate player wins for easier reading.
    //combined computer win for shorter code
    if ((playerSelection == "rock") && (computerSelection == "scissors")){
        message = "You Win! Rock beats Scissors!"
        winner = true;
    }
    else if ((playerSelection == "paper") && (computerSelection == "rock")){
        message = "You Win! Paper covers Rock!";
        winner = true;
    }
    else if ((playerSelection == "scissors") && (computerSelection == "paper")){
        message = "You win! Scissors cut Paper!";
        winner = true;
    }
    else {
        message = `You lose! ${computerSelection} beats ${playerSelection}`;
        winner = false;
    }
    console.log(message);
    return winner;
}

let playerScore;
let computerScore;
// game function: loop using round function, 5 rounds, score, winner/loser at end
//use prompt for input
function game(){
    playerScore = 0;
    computerScore = 0;
    //varible declaration
    let round = 1;
    let playerSelection;
    let computerSelection;
    let win;
    //do while loop for rounds
    do{
        playerSelection = prompt("Enter Choice:");
        computerSelection = computerPlay();
        win = playRound(playerSelection, computerSelection);
        if(win){
            playerScore++;
        }
        else {
            computerScore++;
        }
        round++;

    }while(round <= 5);
    if (playerScore > computerScore){
        alert(`\t\tYou Won!\nYour Score: ${playerScore} | Computer: ${computerScore}`)
    }
    else if(playerScore == computerScore){
        alert(`Tied! Both players scored ${playerScore}`);
    }
    else{
        alert(`You lose!\nYour score: ${playerScore} | Computer: ${computerScore}`);
    }
    
}
