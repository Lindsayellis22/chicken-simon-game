let playerMovesArray = [];
let chickenMovesArray = [];
let round = 0;

document.getElementById('0').addEventListener('click', chickClickHandler);
document.getElementById('1').addEventListener('click', chickClickHandler);
document.getElementById('2').addEventListener('click', chickClickHandler);
document.getElementById('3').addEventListener('click', chickClickHandler);

const startButton = document.getElementById('start');

startButton.addEventListener("click", newGame);

function newGame() {
    chickenMovesArray = [];
    playerMovesArray = [];
    round = 0;
    colorChickens();
};

function colorChickens() {
    chickenMovesArray.push(Math.floor(Math.random() * 3));
    chickenMovesArray.map((chicken, i) => {
        setTimeout(() => {
            const currentChicken = document.getElementById(`${chicken}`);
            setTimeout(()=> makeChickenPink(currentChicken), 1000);
            setTimeout(()=> makeChickenBisque(currentChicken), 2000);
        }, i * 2000);
    });
}

function makeChickenBisque(currentChicken) {
    currentChicken.querySelector('.head').style.background = "bisque";
    currentChicken.querySelector('.tail').style.background = "bisque";
    currentChicken.querySelector('.body').style.background = "bisque";
}

function makeChickenPink(currentChicken) {
    currentChicken.querySelector('.head').style.background = "#e68fac";
    currentChicken.querySelector('.tail').style.background = "#e68fac";
    currentChicken.querySelector('.body').style.background = "#e68fac";
}

function nextRound() {
    console.log('next round')
    round += 1;
    playerMovesArray = [];
    colorChickens();
};

function chickClickHandler(event) {
    console.log(event);
    playerMovesArray.push(parseInt(event.target.dataset.value));
    if (playerMovesArray.length === chickenMovesArray.length){
        checkIfWinner();
    }
}

currentChicken.addEventListener("click", clickColorChange);

function clickColorChange(currentChicken) {
    currentChicken.querySelector('.head').style.background = "#D5D6EA";
    currentChicken.querySelector('.tail').style.background = "#D5D6EA";
    currentChicken.querySelector('.body').style.background = "#D5D6EA";
}


function checkIfWinner() {
    for (let i = 0; i < playerMovesArray.length; i++) {
        if (playerMovesArray[i] !== chickenMovesArray[i]) {      
            console.log('false and lost');
            return "lost";
        }
    }
    nextRound();
}
            
// let testButton = document.getElementById('test');

// testButton.addEventListener("click", resetGame);

// function resetGame() {
//     chickenMovesArray.splice(0,chickenMovesArray.length)
//     playerMovesArray.splice(0,playerMovesArray.length)
//     round = 0;
//     clearTimeout(timeOut);
// }



