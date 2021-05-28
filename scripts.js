/*  Rock, Paper, Scissors UI
    Odin Project
    Dustin Brown 05/28/2021
*/

//varibles for buttons and game play
const play = document.querySelector('#play');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const scoresDisplay = document.querySelector('#scores');
const output = document.querySelector('#output');





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

//listeners for buttons 
let playerRock = rock.addEventListener('click' , ()=> {
    playRound("rock", computerPlay(), startGame)});
let playerPaper = paper.addEventListener('click' , ()=> {
    playRound("paper", computerPlay(), startGame)});
let playerScissors = scissors.addEventListener('click' , ()=> {
    playRound("scissors", computerPlay(), startGame)});

//global var for starting game
var startGame = false;
//varibles for round scoring
let playerScore = 0;
let computerScore = 0;
//start game
play.addEventListener('click', ()=> {
    startGame = true;
    playerScore = 0;
    computerScore = 0;
    
});

//play round function: two parameters case insensitive, "computerSelection"
//displays scores and winner messages
function playRound(playerSelection, computerSelection, startGame){
    if(startGame == false){
        play.classList.toggle("attention");
        playerScore = 0; 
        computerScore = 0;
    }

    else if (startGame == true){
        computerSelection = computerSelection.toLowerCase();
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
        if (winner){
            playerScore++;
            output.style.color = "green";
        }
        else {
            computerScore++;
            output.style.color = "red"; 
        }
        if (playerScore >= 5){
            message =`You won!<br><br>Your score: ${playerScore} | Computer score: ${computerScore}<br>Press 'Play Game' to start a new round.`;
            startGame = false;
            
        }
        else if (computerScore >= 5){ 
            message =`You lost!<br><br>Your score: ${playerScore} | Computer score: ${computerScore}<br>Press 'Play Game' to start a new round.`;
            startGame = false;
        }
        console.log(startGame)
        //displays winning message
        output.innerHTML = message;
        output.style.display = "block";
        //updates scores
        scoresDisplay.innerHTML = `Player's Score ${playerScore} : ${computerScore} Computer's Score`; 
    }
};

//displays scores
document.addEventListener("DOMContentLoaded", ()=>{
    scoresDisplay.innerHTML = `Player's Score ${playerScore} : ${computerScore} Computer's Score`; 
});