const chickenMovesArray = [];
const playerMovesArray = [];
let round = 0;

startButton = document.getElementById('start');

startButton.addEventListener("click", colorChickens);

function colorChickens() {
    round += 1;
    // 1. push a random chicken into the chickenMoves array.
    chickenMovesArray.push(Math.floor(Math.random() * 3) + 1);
    // 2. loop through chcieknMoves Array and for each chicken, make chicken color for 1 second
    chickenMovesArray.map(chicken => {
        const currentChicken = document.getElementById(`body${chicken}`);
        setTimeout(()=> makeChickenPink(currentChicken), 1000);
        setTimeout(()=> makeChickenBisque(currentChicken), 2000); 
    });
    console.log(chickenMovesArray);
};

function makeChickenBisque(currentChicken) {
    currentChicken.style.background = "bisque";
}

function makeChickenPink(currentChicken) {
    currentChicken.style.background = "hotpink";
}


// function playGame() {
    
//     const chickenMovesArray = [];
//     for(let i = 0; i < 10; i++){
//     chickenMovesArray.push(Math.floor(Math.random() * 4) + 1)
//     }
    
// }  

 



// function gameRounds() {
//     let numberOfRounds = 0;
//     const chickenMovesArray = [0, 1, 2, 3];
//     randomChicken = chickenMovesArray[Math.floor(Math.random()*chickenMovesArray.length)];
//     console.log(randomChicken)
//     // chickenMovesArray.push("");
// }
// gameRounds();

// const chickenSprite = document.getElementById('body0');
// console.log(chickenSprite);
// chickenSprite.addEventListener("click", () => changeColor(0));



// function changeColor(chickenNumber) {
    
//     const chickenBody = document.getElementById(`body${chickenNumber}`);
//     chickenBody.style.background = "pink";
//     }
//     intervalChicken = setTimeout(changeColor(2), 8000);
//     console.log(intervalChicken);
// function chickenShow() {
//     const arr = [0, 2, 1, 3];
//     arr.map(chickenNum => {
//         changeColor(chickenNum);
//     }, 10000);
// }






