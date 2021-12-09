const chickenMovesArray = [];
const playerMovesArray = [];
let round = 0;

startButton = document.getElementById('start');

startButton.addEventListener("click", colorChickens);

function colorChickens() {
    round += 1;
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
//     console.log(chickenMovesArray);
// };

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
    });
    chick1.addEventListener("click", function(){
        let clickedBird = chick1.getAttribute('id');
        playerMovesArray.push(clickedBird);
        console.log(playerMovesArray);
    });
    chick2.addEventListener("click", function(){
        let clickedBird = chick2.getAttribute('id');
        playerMovesArray.push(clickedBird);
        console.log(playerMovesArray);
    });
    chick3.addEventListener("click", function(){
        let clickedBird = chick3.getAttribute('id');
        playerMovesArray.push(clickedBird);
        console.log(playerMovesArray);
    });

}

playerClick()
// function didIClick() {
//     // document.body.appendChild(chick0)

// };

// function playerClick() {
//     if(playerMovesArray.sort().join(',') === chickenMovesArray.sort().join(',')){
//         alert('same members');
//     }
//     else alert('not a match');
    
// }
// playerClick()
