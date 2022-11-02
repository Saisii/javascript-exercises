const fibonacci = function(num) {
    if (num < 0) {
        return "OOPS";
    }

    let fib = [1, 1];

    for (i = 0; i <= num; i++) {
        fib.push(fib[i] + fib[i + 1]);
    }

    console.log(fib);

    return fib[num - 1];

};


// Do not edit below this line
module.exports = fibonacci;
