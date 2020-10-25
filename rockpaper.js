function computerPlay() {
    pick = ["rock","paper","scissor"];
    return pick[Math.floor(Math.random()*3)]
}

var playerSelection;


//Game Container
var body = document.querySelector('body');
var div = document.createElement('div');
    body.appendChild(div);
var res = document.createElement('h1');
    div.appendChild(res);
//Buttons
const btnR = document.createElement('button');
btnR.textContent="Rock";
div.appendChild(btnR);
btnR.addEventListener('click', function(){game(btnR.textContent);});

const btnP = document.createElement('button');
btnP.textContent="Paper";
div.appendChild(btnP);
btnP.addEventListener('click', function(){game(btnP.textContent);});

const btnS = document.createElement('button');
btnS.textContent="Scissor";
div.appendChild(btnS);
btnS.addEventListener('click', function(){game(btnS.textContent);});


function playRound(playerSelection) {
a = playerSelection.toLowerCase();
b = computerPlay();;
winMessage = "You Win! "+a+" beats "+b;
loseMessage = "You Lose! "+a+" gets beaten by "+b;
drawMessage = "Draw! "+a+" and "+b+" cancel each other out!";

if(a==="rock"&&b==="paper"){return loseMessage;}
else if(a==="rock"&&b==="scissor"){return winMessage;}
else if(a==="paper"&&b==="rock"){return winMessage;}
else if(a==="paper"&&b==="scissor"){return loseMessage;}
else if(a==="scissor"&&b==="rock"){return loseMessage;}
else if(a==="scissor"&&b==="paper"){return winMessage;}
else if(a===b){return drawMessage;}

};

function game(playerSelection) {
   
        res.textContent = playRound(playerSelection);
        
        
    
};

game();

