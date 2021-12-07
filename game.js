console.log('hi');
// const chickenMovesArray = [];
const playerMovesArray = [];
// let numberOfRounds = 10;
const startButton = document.querySelector('button');

const chickenSprite = document.querySelector('.head')

function startGame() {
    console.log('I was clicked');
}

function clickChicken() {
    console.log('hello chicken')
}

startButton.addEventListener("click", startGame);
// chickenSprite.addEventListener("click", clickChicken);

// function chickenMoves() {

// }

function gameRounds() {
    let numberOfRounds = 10;
    const chickenMovesArray = [0, 1, 2, 3];
    randomChicken = chickenMovesArray[Math.floor(Math.random()*chickenMovesArray.length)];
    console.log(randomChicken)
    // chickenMovesArray.push("");
}
gameRounds();