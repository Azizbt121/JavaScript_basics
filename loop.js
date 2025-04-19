

function printOdds() {
    for (let i = 1; i <= 20; i += 2) {
        console.log(i);
    }
}

function decreasingMultiplesOf3() {
    for (let i = 100; i >= 0; i--) {
        if (i % 3 === 0) {
            console.log(i);
        }
    }
}

function printSequence() {
    for (let i = 4; i >= -3.5; i -= 1.5) {
        console.log(i);
    }
}


function sigma() {
    let sum = 0;
    for (let i = 1; i <= 100; i++) {
        sum += i;
    }
    console.log(sum); 
}

function factorial() {
    let product = 1;
    for (let i = 1; i <= 12; i++) {
        product *= i;
    }
    console.log(product); 
}