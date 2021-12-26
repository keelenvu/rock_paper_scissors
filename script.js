//Psudeocode
//Create a function for the computer to randomly return rock, paper or scissors.
// Write a code which allows the player to input a selection
//Allow player selection and computer selection to compete
//win or lose conditional
// 5 rounds
//reports results

let playerScore = 0;
let computerScore = 0;


function computerPlay() {
    let num = (Math.floor(Math.random() *  3));

    switch (num) {
        case 0:
            return 'rock'
        case 1:
            return 'paper'
        case 2:
            return 'scissors'
    }
}

function playRound () {
    console.log('Player: ' + playerScore);
    console.log('Computer: ' +computerScore);

    let computerSelection = computerPlay();
    let playerSelection = prompt('pick rock paper or scissors').toLowerCase();
    
    console.log('Player plays ' + playerSelection)
    console.log('Computer plays ' + computerSelection)
    
    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        console.log('Player wins!');
        return playerScore++;
    }

    else if (playerSelection === 'rock' && computerSelection === 'paper') {
        console.log('Computer wins!');
        return computerScore++;
    }
    
    else if (playerSelection === 'paper' && computerSelection === 'rock') {
        console.log('Player wins!');
        return playerScore++;

    }

    else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        console.log('Computer wins!');
        return computerScore++;

    }
    
    else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        console.log('Player wins!');
        return playerScore++;
    }

    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        console.log('Computer wins!');
        return computerScore++;
    }

    else {
        console.log('It\s a tie!');
    }


    
}
    function game() {    
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
    }

    function result(score1, score2) {
        console.log('Player has a score of ' + playerScore, 'and the computer has a score of ' + computerScore);
        if (score1 > score2) {
            console.log('Player wins the game!');
        }
        else if (score1 < score2) {
            console.log('Computer wins the game!')
        }
        else {
            console.log("The game ends in a tie!");
        }
    }



game();
result(playerScore, computerScore);














