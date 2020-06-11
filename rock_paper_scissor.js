
//function that play a round of RPS
function playOneRound() {
    let playerSelection = prompt('What move do you want to make?');
    playerSelection = playerSelection.toUpperCase();
    if ((playerSelection == 'ROCK') || (playerSelection == 'PAPER') || (playerSelection == 'SCISSOR')) {
        console.log('User entered right input');
    }
    else {
            playerSelection = prompt('Please enter rock, or paper, or scissor').toUpperCase();
            console.log('Wrong input from user'); 
    }


    let computerSelection = computerPlay();

    //if playerSelection == computerSelection then there's a draw
    if (playerSelection.toLowerCase() == computerSelection) {
        console.log('Draw');
        return 'Draw';
    }
    //configure win-lose situations
    else if ((playerSelection == 'ROCK') && (computerSelection == 'paper')) {
        console.log('computer wins');
        return "Computer wins";
    }
    else if ((playerSelection == 'ROCK') && (computerSelection == 'scissor')) {
        console.log('Player wins');
        return "Player wins";
    }
    else if ((playerSelection == 'PAPER') && (computerSelection == 'rock')) {
        console.log('Player wins');
        return "Player wins";
    }
    else if ((playerSelection == 'PAPER') && (computerSelection == 'scissor')) {
        console.log('computer wins');
        return "Computer wins";
    }
    else if ((playerSelection == 'SCISSOR') && (computerSelection == 'paper')) {
        console.log('Player wins');
        return "Player wins";
    }
    else if ((playerSelection == 'SCISSOR') && (computerSelection == 'rock')) {
        console.log('computer wins');
        return "Computer wins";
    }

}


//randomly generate computer's move
function computerPlay() {
    let moves=['rock', 'paper', 'scissors'];
    return moves[Math.floor(Math.random() * moves.length)];
}
