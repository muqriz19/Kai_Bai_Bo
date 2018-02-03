// Variables

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


// 1 is rock, 2 is paper, 3 is scissor, 0 is nothing
var playerChoice = 0;
var cpuChoice = 0;

var weapon = [

    {
        id: 1,
        name: 'Rock',
        image: '/images/rock64.png'
    },
    
    {
        id: 2,
        name: 'Paper',
        image: '/images/paper64.png'
    },
    
    {
        id: 3,
        name: 'Scissor',
        image: '/images/scissor64.png'
    }

];

var rock = {
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



function generatecpuChoice() {
    cpuChoice = Math.floor(Math.random() * 3 + 1);
}

function startgame() {
    message.innerText = 'Choose Your Weapon!';
    gameStatus.innerHTML = 'Game Start'
    playerScoreEle.innerText = pScore;
    cpuScoreEle.innerText = cpuScore;

}


rockEle.addEventListener('click', function () {
    playerChoice = rock.id;
    generatecpuChoice();

    checkIfBeat(playerChoice, cpuChoice);

});

paperEle.addEventListener('click', function () {
    playerChoice = paper.id;
    generatecpuChoice();

    checkIfBeat(playerChoice, cpuChoice);

});

scissorEle.addEventListener('click', function () {
    playerChoice = scissor.id;
    generatecpuChoice();

    checkIfBeat(playerChoice, cpuChoice);

});

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



function checkIfBeat(playerC, cpuC) {

    // START ROCK ONLY
    if (playerC === rock.id && cpuC === scissor.id) {
        // Player rock beats CPU scissor
        playerChoiceImg.src = rock.image;
        cpuChoiceImg.src = scissor.image;
        message.innerText = 'Player ' + rock.name + ' beats ' + 'CPU ' + scissor.name + '!';
        console.log(playerC + ' ' + cpuC);
        gameStatus.innerText = 'You Win';
        updateScore('player');

    } else if (playerC === rock.id && cpuC === paper.id) {
        // Player rock wrapped by CPU paper
        playerChoiceImg.src = rock.image;
        cpuChoiceImg.src = paper.image;
        message.innerText = 'Player ' + rock.name + ' wrapped by ' + 'CPU ' + paper.name + '!';
        console.log(playerC + ' ' + cpuC);
        gameStatus.innerText = 'You Lost';
        updateScore('cpu');
    
    //END ROCK ONLY


    // START PAPER ONLY
    } else if (playerC === paper.id && cpuC === rock.id) {
        // Player paper wraps CPU rock
        playerChoiceImg.src = paper.image;
        cpuChoiceImg.src = rock.image;
        message.innerText = 'Player ' + paper.name + ' wraps ' + 'CPU ' + rock.name + '!';
        console.log(playerC + ' ' + cpuC);
        gameStatus.innerText = 'You Win';
        updateScore('player');

    } else if (playerC === paper.id && cpuC === scissor.id) {
        // Player paper sliced by CPU scissor
        playerChoiceImg.src = paper.image;
        cpuChoiceImg.src = scissor.image;
        message.innerText = 'Player ' + paper.name + ' sliced by ' + 'CPU ' + scissor.name + '!';
        console.log(playerC + ' ' + cpuC);
        gameStatus.innerText = 'You Lost';
        updateScore('cpu');

    // END PAPER ONLY

    // START SCISSOR ONLY
    } else if (playerC === scissor.id && cpuC === paper.id) {
        // Player scissor shreds by CPU paper
        playerChoiceImg.src = scissor.image;
        cpuChoiceImg.src = paper.image;
        message.innerText = 'Player ' + scissor.name + ' shreds ' + 'CPU ' + paper.name + '!';
        console.log(playerC + ' ' + cpuC);
        gameStatus.innerText = 'You Win';
        updateScore('player');


    } else if (playerC === scissor.id && cpuC === rock.id) {
        // Player scissor crushed by CPU rock
        playerChoiceImg.src = scissor.image;
        cpuChoiceImg.src = rock.image;
        message.innerText = 'Player ' + scissor.name + ' crushed by' + 'CPU ' + rock.name + '!';
        console.log(playerC + ' ' + cpuC);
        gameStatus.innerText = 'You Lost';
        updateScore('cpu');
        
    // END SCISSOR ONLY
    } else if (playerC === cpuC) {
    // START DRAW ONLY
        //playerChoiceImg.src = playerC === cpuC ? 'images/' : 'Please';
        cpuChoiceImg.src = rock.image;

        message.innerText = "Player ";
        gameStatus.innerText = 'Draw'
        console.log(playerC + ' ' + cpuC);
    }
    // END DRAW ONLY
}

