//* A function who returns a random choice for the computer
function computerChoice() {
    const pick = ['rock', 'paper', 'scissors'];
    const randomElement = pick[Math.floor(Math.random() * pick.length)];

    console.log(randomElement);
    return randomElement
}



function playerChoice() {
    let playerPick =  prompt()
    playerPick = playerPick.toLowerCase();

    console.log(playerPick)
    return playerPick;
}

