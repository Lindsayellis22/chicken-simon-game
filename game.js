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


const chick0 = document.getElementById('0');
const chick1 = document.getElementById('1');
const chick2 = document.getElementById('2');
const chick3 = document.getElementById('3');

chick0.addEventListener('click', didIClick);
chick1.addEventListener('click', didIClick);
chick2.addEventListener('click', didIClick);
chick3.addEventListener('click', didIClick);

function didIClick() {
    if(playerMovesArray.sort().join(',')=== chickenMovesArray.sort().join(',')){
        alert('same members');
    }
    else alert('not a match');
}

