let chickenMovesArray = [];
let round = 0;
const chick0 = document.getElementById('0');
const chick1 = document.getElementById('1');
const chick2 = document.getElementById('2');
const chick3 = document.getElementById('3');

const startButton = document.getElementById('start');

startButton.addEventListener("click", colorChickens);

function colorChickens() {
    round += 1;
    // 1. push a random chicken into the chickenMoves array.
    chickenMovesArray.push(Math.floor(Math.random() * 3));
    chickenMovesArray.map((chicken, i) => {
        setTimeout(() => {
        // 2. loop through chcieknMoves Array and for each chicken, make chicken color for 1 second
            const currentChicken = document.getElementById(`body${chicken}`);
            setTimeout(()=> makeChickenPink(currentChicken), 1000);
            setTimeout(()=> makeChickenBisque(currentChicken), 2000);
        }, i * 2000);
    });
    setTimeout(playerClick, (chickenMovesArray.length) * 2000);
}

// function gameRound() {
//     console.log("nextround");
//     playerMovesArray.splice(0, playerMovesArray.length);
//     return round += 1; 
// };

function makeChickenBisque(currentChicken) {
    currentChicken.style.background = "bisque";
}

function makeChickenPink(currentChicken) {
    currentChicken.style.background = "hotpink";
}

function chickClickHandler(id, playerMovesArray) {
    console.log('clickedChick');
    playerMovesArray.push(id);
}

function listenForPlayer(playerMovesArray) {
    console.log('player clicked')
    if (playerMovesArray.length === chickenMovesArray.length){
        checkIfWinner(playerMovesArray);
    } 
}

function playerClick() {
    let playerMovesArray = new Array();
    document.getElementById('chickenContainer').addEventListener('click', () => listenForPlayer(playerMovesArray));
    console.log('inside player click');
    chick0.addEventListener("click", ()  => chickClickHandler(0, playerMovesArray));
    chick1.addEventListener("click", ()  => chickClickHandler(1, playerMovesArray));
    chick2.addEventListener("click", ()  => chickClickHandler(2, playerMovesArray));
    chick3.addEventListener("click", ()  => chickClickHandler(3, playerMovesArray));
        
    
    console.log(chickenMovesArray, 'cma');
}

function clearEventListeners() {
    console.log('clear event listeners')
    document.getElementById('chickenContainer').removeEventListener('click', listenForPlayer);
    chick0.removeEventListener('click', chickClickHandler);
    chick1.removeEventListener('click', chickClickHandler);
    chick2.removeEventListener('click', chickClickHandler);
    chick3.removeEventListener('click', chickClickHandler);
    console.log(chick0);
};

function checkIfWinner(arr) {
    clearEventListeners();
    console.log(arr, "pma inside check winner and your mom");
    console.log('inside checkwinner');
    if(arr.length !== chickenMovesArray.length) {
        console.log('you are posessed')
        return false;
    }
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] !== chickenMovesArray[i]) {      
            console.log('false and lost');
            return false;
        }
    }
    colorChickens();
    return true;
}
            
// let testButton = document.getElementById('test');

// testButton.addEventListener("click", resetGame);

// function resetGame() {
//     chickenMovesArray.splice(0,chickenMovesArray.length)
//     playerMovesArray.splice(0,playerMovesArray.length)
//     round = 0;
//     clearTimeout(timeOut);
// }



