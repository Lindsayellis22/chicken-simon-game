console.log('hi');
// const chickenMovesArray = [];
const playerMovesArray = [];
let numberOfRounds = 0;
const startButton = document.getElementById('start');
console.log(startButton);

startButton.addEventListener("click", startGame);

function startGame() {
    // chickenShow();
    if (numberOfRounds === 0) {
        chickenShow(); 
    }
}



// function gameRounds() {
//     let numberOfRounds = 0;
//     const chickenMovesArray = [0, 1, 2, 3];
//     randomChicken = chickenMovesArray[Math.floor(Math.random()*chickenMovesArray.length)];
//     console.log(randomChicken)
//     // chickenMovesArray.push("");
// }
// gameRounds();

const chickenSprite = document.getElementById('0');
console.log(chickenSprite);
chickenSprite.addEventListener("click", () => changeColor(0));



function changeColor(chickenNumber) {
    
    const chickenBody = document.getElementById(`body${chickenNumber}`);
    chickenBody.style.background = "red";
    
}
function chickenShow() {
    const arr = [0, 2, 1, 3];
    arr.map(chickenNum => {
        changeColor(chickenNum);
    }, 2000);
}

// chickenShow();






