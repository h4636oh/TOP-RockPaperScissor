// Declaring all the needed variables

let yourSelection = "none";
let computerSelection = "none";
let winner = "none";
let WINNER = "none";
let yourScore = 0;
let computerScore = 0;

// Creating all the required Sub-functions

function getUserResponse(option) 
{
    yourSelection = option;
}

function getComputerResponse() 
{
    let options = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * options.length);
    computerSelection = options[randomIndex];
    console.log(computerSelection);
}

function compareResponse() 
{
    if (yourSelection == computerSelection) winner = "none";
    else if (yourSelection == "rock" && computerSelection  == "scissors") winner = "you";
    else if (yourSelection == "paper" && computerSelection == "rock") winner = "you";
    else if (yourSelection == "scissors" && computerSelection == "paperr") winner = "you";
    else winner = "computer";
}

function setScore() 
{
    if (winner == "you") yourScore++;
    else if (winner == "computer") computerScore++;

    let yourScorePara = document.getElementById("your-score");
    let computerScorePara = document.getElementById("computer-score");

    yourScorePara.textContent = yourScore;
    computerScorePara.textContent = computerScore;
}

function setResponseImage()
{   
    let yourImage = document.getElementById("your-result-image");

    if (yourSelection == "rock") yourImage.src = "images/rock.png";
    else if (yourSelection == "paper") yourImage.src = "images/paper.png";
    else if (yourSelection == "scissors") yourImage.src = "images/scissors.png";

    let computerImage = document.getElementById("computer-result-image");

    if (computerSelection == "rock") computerImage.src = "images/rock.png";
    else if (computerSelection == "paper") computerImage.src = "images/paper.png";
    else if (computerSelection == "scissors") computerImage.src = "images/scissors.png";
}

function setReason() 
{
    let reason = document.getElementById("reason-text");
    
    if (winner == "you") reason.textContent = "You WON!! " + yourSelection + " beats " + computerSelection;
    else if (winner == "computer") reason.textContent = "You LOST!! " + computerSelection + " beats " + yourSelection;
    else reason.textContent = "Its a Tie!! both drew " + yourSelection;
}

function whoWins() 
{
    if (yourScore == 5) WINNER = "You";
    else if (computerScore == 5) WINNER = "Computer";
    else WINNER = "none";
}

function winMessage() 
{
    if (WINNER != "none")
    {
        alert(WINNER + " has won this match of jaken pon!!")
        yourScore = 0;
        computerScore = 0;
    }
}

function playJanken(option)
{
    getUserResponse(option);
    getComputerResponse();
    compareResponse();
    setScore();
    setResponseImage();
    setReason();
    whoWins();
    winMessage();
}