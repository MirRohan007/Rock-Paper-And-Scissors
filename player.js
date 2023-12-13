let player1 = 0;
let player2 = 0;

let player1Choice = "";
let player2Choice = "";

let count = 0;

let player1Score = document.querySelector("#player-score");
let player2Score = document.querySelector("#comp-score");

let choices = document.querySelectorAll(".choice");
let message = document.querySelector(".message");
let reset = document.querySelector(".reset");

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        if(count == 0){
            count++;
            player1Choice = choice.getAttribute("id");
        }
        else{
            player2Choice = choice.getAttribute("id");
            play(player1Choice,player2Choice);
            player1Choice = "";
            player2Choice = "";
            count = 0;
        }

    });
});

const play = (player1Choice,player2Choice) => {
    let p1 = player1Choice;
    let p2 = player2Choice;
    let win = false;

    if(p1 === p2){
        message.innerText = `Draw! Choose Again.`;
        message.style.backgroundColor = "#FF8800";
        return;
    }
    else if(p1==="rock"){
        win = p2==="paper"? false:true;
    }
    else if(p1==="paper"){
        win = p2==="scissors"? false:true;
    }
    else{
        win = p2==="rock"? false:true;
    }

    if(win){
        message.innerText = `Player1 beats Player2.`;
        message.style.backgroundColor = "#0099CC";
        player1++;
        player1Score.innerText = player1;
        return;
    }
    else{
        message.innerText = `Player2 beats Player1.`;
        message.style.backgroundColor = "#0099CC";
        player2++;
        player2Score.innerText = player2;
        return;
    }   
};

reset.addEventListener("click", () => {
    player1 = 0;
    player2 = 0;
    player1Score.innerText = player1;
    player2Score.innerText = player2;
    message.innerText = "Click The icons to start Playing"
});
