

function alwaysHungry(arr) {
    let foundFood = false;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "food") {
            console.log("yummy");
            foundFood = true;
        }
    }
    if (!foundFood) {
        console.log("I'm hungry");
    }
}


function highPass(arr, cutoff) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > cutoff) {
            result.push(arr[i]);
        }
    }
    return result;
}


function betterThanAverage(arr) {
    let sum = 0;
    let average = sum / arr.length;
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (arr[i] > average) {
            count++;
        }
    }
    return count;
}

function reverseArray(arr) {
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed;
}


function fibonacciArray(n) {
    let fibArr = [0, 1]; 

    for (let i = 2; i < n; i++) {
        fibArr.push(fibArr[i - 1] + fibArr[i - 2]);
    }

    return fibArr.slice(0, n); 
}