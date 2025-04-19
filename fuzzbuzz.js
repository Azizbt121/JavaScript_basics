
function fuzzbuzz(n) {
    for (var i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('fuzzbuzz');
        } else if (i % 3 === 0) {
            console.log('fuzz');
        } else if (i % 5 === 0) {
            console.log('buzz');
        } else {
            console.log(i);
        }
    }
}

fuzzbuzz(20);