const chickenMovesArray = [];
const playerMovesArray = [];
let round = 0;

startButton = document.getElementById('start');

startButton.addEventListener("click", colorChickens);

function colorChickens() {
    // working = true;
    gameRound();
    // 1. push a random chicken into the chickenMoves array.
    chickenMovesArray.push(Math.floor(Math.random() * 3) + 1);
    chickenMovesArray.map((chicken, i) => {
        setTimeout(() => {
        // 2. loop through chcieknMoves Array and for each chicken, make chicken color for 1 second
            const currentChicken = document.getElementById(`body${chicken}`);
        //     chickenMovesArray.map((chicken, i => setTimeout(() => {const currentChicken = document.getElementById(`body${chicken}`);
            setTimeout(()=> makeChickenPink(currentChicken), 1000);
            setTimeout(()=> makeChickenBisque(currentChicken), 2000);
        }, i * 2000)
    })
}
    console.log(chickenMovesArray);
// };
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
        let clickedBird = chick0.getAttribute('id');
        playerMovesArray.push(clickedBird);
        console.log(playerMovesArray);
        checkIfWinner()
    });
    chick1.addEventListener("click", function(){
        let clickedBird = chick1.getAttribute('id');
        playerMovesArray.push(clickedBird);
        console.log(playerMovesArray);
        checkIfWinner()
    });
    chick2.addEventListener("click", function(){
        let clickedBird = chick2.getAttribute('id');
        playerMovesArray.push(clickedBird);
        console.log(playerMovesArray);
        checkIfWinner()
    });
    chick3.addEventListener("click", function(){
        let clickedBird = chick3.getAttribute('id');
        playerMovesArray.push(clickedBird);
        console.log(playerMovesArray);
        checkIfWinner()
    });

}

playerClick()

function checkIfWinner() {
    if (playerMovesArray[playerMovesArray.length -1] == chickenMovesArray[chickenMovesArray.length-1] && (playerMovesArray.length === chickenMovesArray.length) ){
        gameRound()
        colorChickens()
        console.log('ok')
    }else {
        console.log('you lose')
    }
  }  
  checkIfWinner();
    
            
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




