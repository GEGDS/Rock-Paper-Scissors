//* A function that input a player choice
function playerChoice() {
    let playerPick =  prompt()
    playerPick = playerPick.toLowerCase();

    return playerPick;
}


//* A function who returns a random choice for the computer
function computerChoice() {
    const pick = ['rock', 'paper', 'scissors'];
    const randomElement = pick[Math.floor(Math.random() * pick.length)];

    return randomElement
}

//*  A function that returns a round of a game
let round1 = function(choice1, choice2) {
    if(choice1===choice2){
        return "The result is a tie!";
    }
    else if(choice1==="rock"){
        if(choice2==="scissors"){
            return "rock wins"
        }
        else if(choice2==="paper"){
            return "paper wins";
        }
    }
    else if(choice1==="paper"){
        if(choice2==="scissors"){
            return "scissors win"
        }
        else if(choice2==="rock"){
            return "paper wins";
        }
    }
    else if(choice1==="scissors"){
        if(choice2==="paper"){
            return "scissors win"
        }
        else if(choice2==="rock"){
            return "rock wins";
        }
    }
}


function game() {
    for (let i = 1; i <= 5; i++) {
        if ( i ) {
            console.log(round1(playerChoice(), computerChoice()));
}
}
}

console.log(game())