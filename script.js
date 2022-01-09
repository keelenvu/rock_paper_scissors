const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
let score = document.querySelector('.result')
let playerScoreLabel = document.querySelector('.user-score');
let computerScoreLabel = document.querySelector('.computer-score');
let outcome = document.querySelector('.outcome-text');



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

rock.addEventListener('click', function() {
    playRound('rock');
});

paper.addEventListener('click', function() {
    playRound('paper');
});

scissors.addEventListener('click', function() {
    playRound('scissors');
});

function scores(sign1, sign2) {
    score.innerHTML = `You selected ${sign1} and cpu selected ${sign2}`;
}

function win() {
    playerScore++;
    playerScoreLabel.innerHTML = playerScore;
    outcome.innerHTML = 'Player wins!';
}
function lose() {
    computerScore++;
    computerScoreLabel.innerHTML = computerScore;
    outcome.innerHTML = 'Computer wins!';
}
function tie() {
    outcome.innerHTML = 'Its a tie!';
}





function playRound (playerSelection) {
    console.log('Player: ' + playerScore);
    console.log('Computer: ' + computerScore);

    let computerSelection = computerPlay();

    scores(playerSelection, computerSelection);
    
    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        win();
    }

    else if (playerSelection === 'rock' && computerSelection === 'paper') {
        lose();

    }
    
    else if (playerSelection === 'paper' && computerSelection === 'rock') {
        win();

    }

    else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        console.log('Computer wins!');
        lose();

    }
    
    else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        console.log('Player wins!');
        win();
    }

    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        console.log('Computer wins!');
        lose();
    }

    else {
        tie();
    }


    
}


    function result(score1, score2) {

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
