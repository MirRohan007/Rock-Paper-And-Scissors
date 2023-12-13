let playerScore = 0;
let compScore = 0;
const symbols = ["rock", "paper", "scissors"];

let player = document.querySelector("#player-score");
let comp = document.querySelector("#comp-score");
let reset = document.querySelector(".reset");

let choices = document.querySelectorAll(".choice");
let message = document.querySelector(".message");

choices.forEach(choice => {
    choice.addEventListener("click",() => {
        let playerChoice = choice.getAttribute("id");
        play(playerChoice);
    });
});

const play = (userChoice) => {
    let compChoice = generateChoice();
    compare(userChoice,compChoice);
};

const generateChoice = () => {
    let num = Math.floor(Math.random()*3);
    let symbol = symbols[num];
    return symbol;
};

const compare = (userChoice,compChoice) => {
    let win = false;
    if(userChoice===compChoice){
        message.innerText = `Draw! Choose Again.`;
        message.style.backgroundColor = "#FF8800";
        return;
    }
    else if(userChoice==="rock"){
        win = compChoice==="paper"? false:true;
    }
    else if(userChoice==="paper"){
        win = compChoice==="scissors"? false:true;
    }
    else{
        win = compChoice==="rock"? false:true;
    }

    if(win){
        message.innerText = `Win! Your ${userChoice} beats ${compChoice}.`;
        message.style.backgroundColor = "#007E33";
        playerScore++;
        player.innerText = playerScore;
    }
    else{
        message.innerText = `Lose! ${compChoice} beats your ${userChoice}.`;
        message.style.backgroundColor = "#CC0000";
        compScore++;
        comp.innerText = compScore;
    }
};

reset.addEventListener("click",() => {
    playerScore = 0;
    compScore = 0;
    player.innerText = playerScore;
    comp.innerText = compScore;
    message.innerText = "Choose Rock, Paper or Scissors";
    message.style.backgroundColor = "#0099CC";
});