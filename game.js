const chickenMovesArray = [];
const playerMovesArray = [];
let round = 0;
numberChicken = 0;

startButton = document.getElementById('start');

startButton.addEventListener("click", colorChickens);

function colorChickens() {
    gameRound();
    // 1. push a random chicken into the chickenMoves array.
    chickenMovesArray.push(Math.floor(Math.random() * 3) + 1);
    chickenMovesArray.map((chicken, i) => {
        setTimeout(() => {
        // 2. loop through chcieknMoves Array and for each chicken, make chicken color for 1 second
            const currentChicken = document.getElementById(`body${chicken}`);
            setTimeout(()=> makeChickenPink(currentChicken), 1000);
            setTimeout(()=> makeChickenBisque(currentChicken), 2000);
        }, i * 2000)
    })
}

function gameRound() {
   return round += 1; 
};

function makeChickenBisque(currentChicken) {
    currentChicken.style.background = "bisque";
}

function makeChickenPink(currentChicken) {
    currentChicken.style.background = "hotpink";
}





function playerClick() {
    const chick0 = document.getElementById('0');
    const chick1 = document.getElementById('1');
    const chick2 = document.getElementById('2');
    const chick3 = document.getElementById('3');
    chick0.addEventListener("click", function(){
        let clickedBird0 = chick0.getAttribute('id');
        playerMovesArray.push(0);
        console.log(playerMovesArray);
        checkIfWinner()
    });
    chick1.addEventListener("click", function(){
        let clickedBird1 = chick1.getAttribute('id');
        playerMovesArray.push(1);
        console.log(playerMovesArray);
        checkIfWinner()
    });
    chick2.addEventListener("click", function(){
        let clickedBird2 = chick2.getAttribute('id');
        playerMovesArray.push(2);
        console.log(playerMovesArray);
        checkIfWinner()
    });
    chick3.addEventListener("click", function(){
        let clickedBird3 = chick3.getAttribute('id');
        playerMovesArray.push(3);
        console.log(playerMovesArray);
        checkIfWinner()
    });

}

playerClick()

function checkIfWinner() {
    for(let i = 0; i < playerMovesArray.length; i++) {
        if(playerMovesArray[i] !== chickenMovesArray[i]) {      
            console.log('false')
            return false;
        }
    }
    console.log('true')
    return true;
}
            
// if(playerMovesArray.sort().join(',') === chickenMovesArray.sort().join(',')){
//     colorChickens();
//     gameRound();
// alert('same members');
// }
// else alert('not a match');
// for(let i = 0; i < playerMovesArray.length; i++) {
//     if(playerMovesArray[i] == chickenMovesArray[i]) {
//         console.log('true')
//         colorChickens();
//         gameRound();
//     }
//     else {
//         (playerMovesArray[i] !== chickenMovesArray[i])
//         console.log('false')
//     }

// }





