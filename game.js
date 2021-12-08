console.log('hi');
// const chickenMovesArray = [];
const playerMovesArray = [];
// let numberOfRounds = 10;
const startButton = document.querySelector('button');


startButton.addEventListener("click", startGame);

function startGame() {
    console.log('I was clicked');
}



function gameRounds() {
    let numberOfRounds = 10;
    const chickenMovesArray = [0, 1, 2, 3];
    randomChicken = chickenMovesArray[Math.floor(Math.random()*chickenMovesArray.length)];
    console.log(randomChicken)
    // chickenMovesArray.push("");
}
gameRounds();

const chickenSprite = document.getElementById('0');
console.log(chickenSprite);
chickenSprite.addEventListener("click", clickChicken);

function clickChicken() {
    
    console.log('hello chicken')
}


