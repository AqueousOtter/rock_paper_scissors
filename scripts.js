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
};

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

};

//global varibles for round scoring
let playerScore = 0;
let computerScore = 0;
//start game
play.addEventListener('click', ()=> {
    playerScore = 0;
    computerScore = 0;
    rock.classList.toggle("hidden");
    paper.classList.toggle("hidden");
    scissors.classList.toggle("hidden");
    output.style.display = "none"; //hides previous round message until new round is played
    scoreUpdate(); //sets scores to zero if new game is played  
});

//listeners for buttons 
let playerRock = rock.addEventListener('click' , ()=> {
    playRound("rock", computerPlay())});
let playerPaper = paper.addEventListener('click' , ()=> {
    playRound("paper", computerPlay())});
let playerScissors = scissors.addEventListener('click' , ()=> {
    playRound("scissors", computerPlay())});

//play round function: two parameters case insensitive, "computerSelection"
//displays scores and winner messages
function playRound(playerSelection, computerSelection){
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
        rock.classList.toggle("hidden");
        paper.classList.toggle("hidden");
        scissors.classList.toggle("hidden");  
        play.classList.toggle("attention"); 
    }
    else if (computerScore >= 5){ 
        message =`You lost!<br><br>Your score: ${playerScore} | Computer score: ${computerScore}<br>Press 'Play Game' to start a new round.`;
        startGame = false;
        rock.classList.toggle("hidden");
        paper.classList.toggle("hidden");
        scissors.classList.toggle("hidden");
        play.classList.toggle("attention");
    }

    //displays winning message
    output.innerHTML = message;
    output.style.display = "block";
    //updates scores
    scoreUpdate();

};

//function for updating scores, mostly for easier to read/follow code
function scoreUpdate(){
    scoresDisplay.innerHTML = `Player's Score ${playerScore} : ${computerScore} Computer's Score`; 
};

//displays scores, hides buttons on load
document.addEventListener("DOMContentLoaded", ()=>{
    scoresDisplay.innerHTML = `Player's Score ${playerScore} : ${computerScore} Computer's Score`; 
    rock.className = "hidden";
    paper.className = "hidden";
    scissors.className = "hidden";
});    startGame = true;