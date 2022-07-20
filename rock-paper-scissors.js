//* A function that input a player choice
function playerChoice() {
    let playerPick =  prompt("Pick a move")
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
            playerScore++;
            return "Player wins"
        }
        else if(choice2==="paper"){
            computerScore++;
            return "Computer wins";
        }
    }
    else if(choice1==="paper"){
        if(choice2==="scissors"){
            computerScore++;
            return "Computer wins"
        }
        else if(choice2==="rock"){
            playerScore++;
            return "Player wins";
        }
    }
    else if(choice1==="scissors"){
        if(choice2==="paper"){
            playerScore++;
            return "Player wins"
        }
        else if(choice2==="rock"){
            computerScore++;
            return "Computer wins";
        }
    }
}


function game() {
    for (let rounds = 1; rounds <= 5; rounds++) {
        if ( rounds ) {
            console.log(round1(playerChoice(), computerChoice()));
}
}
}

let playerScore = parseInt(0);
    let computerScore = parseInt(0);


function scoreboard() {
    if (playerScore > computerScore){
        return "Player Wins"
    }
    else if (computerScore > playerScore){
        return "Computer Wins"
    }
    else if (computerScore === playerScore){
        return "it´s a tie"
    }
}

console.log(game());
console.log("Player score = " + playerScore);
console.log("Computer score = " + computerScore);
console.log(scoreboard());

