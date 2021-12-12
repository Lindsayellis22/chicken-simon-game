
// Name variables
let playerMovesArray = [];
let chickenMovesArray = [];
let round = 0;

document.getElementById('0').addEventListener('click', chickClickHandler);
document.getElementById('1').addEventListener('click', chickClickHandler);
document.getElementById('2').addEventListener('click', chickClickHandler);
document.getElementById('3').addEventListener('click', chickClickHandler);

const startButton = document.getElementById('start');
const openBtn = document.getElementById('openModal');
const modal = document.getElementById('modal')
const close = document.getElementById('close')

const openModal = () => {
    modal.style.display = 'block';
}
openBtn.addEventListener('click', openModal)

const closeModal = () => {
    modal.style.display = 'none'
}
close.addEventListener('click', closeModal)

// Click handler function to start game
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


function clickColorChange(currentChicken) {
    currentChicken.querySelector('.head').style.background = "#F27348";
    currentChicken.querySelector('.tail').style.background = "#F27348";
    currentChicken.querySelector('.body').style.background = "#F27348";
}

function nextRound() {
    round += 1;
    playerMovesArray = [];
    colorChickens()
}

function chickClickHandler(event) { 
    const chickenId = event.target.parentElement.getAttribute("data-value");
    const currentChicken = document.getElementById(chickenId);
    clickColorChange(currentChicken);
    setTimeout(() => makeChickenBisque(currentChicken), 500);
    playerMovesArray.push(parseInt(chickenId));
      if (playerMovesArray.length === chickenMovesArray.length){
          checkIfWinner();
    }
}


function checkIfWinner() {
    if (playerMovesArray.length === chickenMovesArray.length) {
    if (playerMovesArray.length === 11) {
            alert("Congratulations! You've won!")
            return;
        }
    }
    for (let i = 0; i < playerMovesArray.length; i++) {
        if (playerMovesArray[i] !== chickenMovesArray[i]) {
            alert('Sorry, wrong chicken! Please play again :)')
            resetGame()      
            return "lost";
        }
    }
    setTimeout(nextRound, 1000);
}
            
let restartButton = document.getElementById('restart');

restartButton.addEventListener("click", resetGame);

function resetGame() {
    chickenMovesArray = [];
    playerMovesArray = [];
    round = 0;
    colorChickens();
}



