// Variables

"use strict";

var playerScoreEle = document.getElementById('player-s');
var cpuScoreEle = document.getElementById('cpu-s');
var pScore = 0;
var cpuScore = 0;

var message = document.getElementById('messages');
var gameStatus = document.getElementById('status');

var rockEle = document.getElementById('rock');
var paperEle = document.getElementById('paper');
var scissorEle = document.getElementById('scissor');

var playerChoiceImg = document.getElementById('player-choice');
var cpuChoiceImg = document.getElementById('cpu-choice');


// 0 - rock
// 1 - paper
// 3 - scissor
var playerChoice;
var cpuChoice;

var weapon = [

    {
        id: 0,
        name: 'Rock',
        image: '/images/rock64.png'
    },

    {
        id: 1,
        name: 'Paper',
        image: '/images/paper64.png'
    },

    {
        id: 2,
        name: 'Scissor',
        image: '/images/scissor64.png'
    }

]

/* var rock = {
    id: 1,
    name: 'Rock',
    image: '/images/rock64.png'
}

var paper = {
    id: 2,
    name: 'Paper',
    image: '/images/paper64.png'
}

var scissor = {
    id: 3,
    name: 'Scissor',
    image: '/images/scissor64.png'
}
 */


/* function generatecpuChoice() {
    //Generate Using string choices
    cpuChoice = Math.floor(Math.random() * 3 + 1);
    var computerChoice;
    //console.log(weapon[cpuChoice-1].name);

    if (cpuChoice === 1) {
        computerChoice = 'Rock';

    } else if (cpuChoice === 3) {
        computerChoice === 'Paper';

    } else if (cpuChoice === 2) {
        computerChoice = 'Scissor';
    }

    return computerChoice;
} */

function generatecpuChoice() {
    //Generate Using integer choices
    cpuChoice = Math.floor(Math.random() * 3 + 1);

    return cpuChoice;
}

function init() {
    message.innerText = 'Choose Your Weapon!';
    gameStatus.innerHTML = 'Game Start'
    playerScoreEle.innerText = 0;
    cpuScoreEle.innerText = 0;


}

function updateScore(whoWon) {

    switch (whoWon) {
        case 'player':
            pScore += 1;
            playerScoreEle.innerText = pScore;
            break;

        case 'cpu':
            cpuScore += 1;
            cpuScoreEle.innerText = cpuScore;
            break;

        default:
            console.log('Update score Failed');
    }
}

function checkIfBeat(playC, cpuC) {

    if (weapon[playC].name === 'Rock' && weapon[cpuC - 1].name === 'Paper') {
        // Player rock dies CPU paper
        message.innerText = 'Player ' + weapon[playC].name + ' wrapped by ' + ' CPU ' + weapon[cpuC - 1].name + '!';
        gameStatus.innerText = 'You Lost!';
        playerChoiceImg.src = weapon[playC].image;
        cpuChoiceImg.src = weapon[cpuC - 1].image;

        // Provide who won..
        updateScore('cpu');

    } else if (weapon[playC].name === 'Rock' && weapon[cpuC - 1].name === 'Scissor') {
        // Player rock smash CPU Scissor
        message.innerText = 'Player ' + weapon[playC].name + ' smashed by ' + ' CPU ' + weapon[cpuC - 1].name + '!';
        gameStatus.innerText = 'You Win!';
        playerChoiceImg.src = weapon[playC].image;
        cpuChoiceImg.src = weapon[cpuC - 1].image;

        // Provide who won..
        updateScore('player');

    } else if (weapon[playC].name === 'Paper' && weapon[cpuC - 1].name === 'Rock') {
        // Player paper beats CPU rock
        message.innerText = 'Player ' + weapon[playC].name + ' beats ' + ' CPU ' + weapon[cpuC - 1].name + '!';
        gameStatus.innerText = 'You Win!';
        playerChoiceImg.src = weapon[playC].image;
        cpuChoiceImg.src = weapon[cpuC - 1].image;

        // Provide who won..
        updateScore('player');

    } else if (weapon[playC].name === 'Paper' && weapon[cpuC - 1].name === 'Scissor') {
        // Player paper shredded by CPU scissor
        message.innerText = 'Player ' + weapon[playC].name + ' shredded by ' + ' CPU ' + weapon[cpuC - 1].name + '!';
        gameStatus.innerText = 'You Lost!';
        playerChoiceImg.src = weapon[playC].image;
        cpuChoiceImg.src = weapon[cpuC - 1].image;

        // Provide who won..
        updateScore('cpu');
        
    } else if (weapon[playC].name === 'Scissor' && weapon[cpuC - 1].name === 'Rock') {
        // Player scissor crushed by CPU rock
        message.innerText = 'Player ' + weapon[playC].name + ' crushed by ' + ' CPU ' + weapon[cpuC - 1].name + '!';
        gameStatus.innerText = 'You Lost!';
        playerChoiceImg.src = weapon[playC].image;
        cpuChoiceImg.src = weapon[cpuC - 1].image;

        // Provide who won..
        updateScore('cpu');

    } else if (weapon[playC].name === 'Scissor' && weapon[cpuC - 1].name === 'Paper') {
        // Player scissor snips by CPU paper
        message.innerText = 'Player ' + weapon[playC].name + ' snips ' + ' CPU ' + weapon[cpuC - 1].name + '!';
        gameStatus.innerText = 'You Lost!';
        playerChoiceImg.src = weapon[playC].image;
        cpuChoiceImg.src = weapon[cpuC - 1].image;

        // Provide who won..
        updateScore('player');

    } else {
        // Both Draw
        message.innerText = 'Player ' + weapon[playC].name + ' draws with ' + ' CPU ' + weapon[cpuC - 1].name + '!';
        gameStatus.innerText = 'Draw!';
        playerChoiceImg.src = weapon[playC].image;
        cpuChoiceImg.src = weapon[cpuC - 1].image;
    }
}



/* function checkIfBeat(playerC, cpuC) {

    // START ROCK ONLY
    if (weapon[playerC].name === 'Rock' && weapon[cpuC - 1 - 1].name === 'Scissor') {
        // Player rock beats CPU scissor
        playerChoiceImg.src = weapon[playerC].image;
        cpuChoiceImg.src = weapon[cpuC - 1].image;
        message.innerText = 'Player ' + weapon[playerC].name + ' beats ' + 'CPU ' + weapon[cpuC - 1].name + '!';
        console.log(playerC + ' ' + cpuC - 1);
        gameStatus.innerText = 'You Win';
        updateScore('player');

    } else if (playerC === weapon[playerC].id && cpuC - 1 === weapon[cpuC - 1-1].id) {
        // Player rock wrapped by CPU paper
        playerChoiceImg.src = weapon[playerC].image;
        cpuChoiceImg.src = weapon[cpuC - 1].image;
        message.innerText = 'Player ' + weapon[playerC].name + ' wrapped by ' + 'CPU ' + weapon[playerC].name + '!';
        console.log(playerC + ' ' + cpuC - 1);
        gameStatus.innerText = 'You Lost';
        updateScore('cpu');

        //END ROCK ONLY


        // START PAPER ONLY
    } else if (playerC === weapon[playerC].id && cpuC - 1 === weapon[cpuC - 1].id) {
        // Player paper wraps CPU rock
        playerChoiceImg.src = weapon[playerC].image;
        cpuChoiceImg.src = weapon[cpuC - 1].image;
        message.innerText = 'Player ' + weapon[playerC].name + ' wraps ' + 'CPU ' + weapon[cpuC - 1].name + '!';
        console.log(playerC + ' ' + cpuC - 1);
        gameStatus.innerText = 'You Win';
        updateScore('player');

    } else if (playerC === weapon[playerC].id && cpuC - 1 === weapon[cpuC - 1].id) {
        // Player paper sliced by CPU scissor
        playerChoiceImg.src = weapon[playerC].image;
        cpuChoiceImg.src = weapon[cpuC - 1].image;
        message.innerText = 'Player ' + weapon[playerC].name + ' sliced by ' + 'CPU ' + weapon[cpuC - 1].name + '!';
        console.log(playerC + ' ' + cpuC - 1);
        gameStatus.innerText = 'You Lost';
        updateScore('cpu');

        // END PAPER ONLY

        // START SCISSOR ONLY
    } else if (playerC === weapon[playerC].id && cpuC - 1 === weapon[cpuC - 1].id) {
        // Player scissor shreds by CPU paper
        playerChoiceImg.src = weapon[playerC].image;
        cpuChoiceImg.src = weapon[cpuC - 1].image;
        message.innerText = 'Player ' + weapon[playerC].name + ' shreds ' + 'CPU ' + weapon[cpuC - 1].name + '!';
        console.log(playerC + ' ' + cpuC - 1);
        gameStatus.innerText = 'You Win';
        updateScore('player');


    } else if (playerC === weapon[playerC].id && cpuC - 1 === weapon[cpuC - 1].id) {
        // Player scissor crushed by CPU rock
        playerChoiceImg.src = weapon[playerC].image;
        cpuChoiceImg.src = weapon[cpuC - 1].image;
        message.innerText = 'Player ' + weapon[playerC].name + ' crushed by' + 'CPU ' + weapon[cpuC - 1].name + '!';
        console.log(playerC + ' ' + cpuC - 1);
        gameStatus.innerText = 'You Lost';
        updateScore('cpu');

        // END SCISSOR ONLY
    } else if (playerC === cpuC - 1) {
        // START DRAW ONLY
        playerChoiceImg.src = weapon[playerC].image;
        cpuChoiceImg.src = weapon[cpuC - 1].image;

        message.innerText = "Player ";
        gameStatus.innerText = 'Draw'
        console.log(playerC + ' ' + cpuC - 1);
    }
    // END DRAW ONLY
} */


rockEle.addEventListener('click', function () {
    playerChoice = weapon[0].id;
    //console.log(playerChoice);
    cpuChoice = generatecpuChoice();
    checkIfBeat(playerChoice, cpuChoice);

});

paperEle.addEventListener('click', function () {
    playerChoice = weapon[1].id;
    //console.log(playerChoice);
    cpuChoice = generatecpuChoice();
    checkIfBeat(playerChoice, cpuChoice);

});

scissorEle.addEventListener('click', function () {
    playerChoice = weapon[2].id;
    //console.log(playerChoice);
    cpuChoice = generatecpuChoice();
    checkIfBeat(playerChoice, cpuChoice);

});







