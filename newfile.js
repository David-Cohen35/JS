function madLib(verb, adj, noun) {
    return `We shall ${verb.toUpperCase()} the ${adj.toUpperCase()} ${noun.toUpperCase()}.`
}


function isSubstring(searchString, subString) {
    return searchString.includes(subString);
}

function fizzBuzz(array) {
    const result = [];

    array.forEach(i => {
        if ((i % 3 === 0) ^ (i % 5 === 0)) {
            result.push(i);
        }
    });

    return result;
}


function isPrime(num) {
    if (num < 2) { return false; }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function sumNPrimes(num) {
    let sum = 0;
    let countPrimes = 0;
    let i = 2;

    while (countPrimes < num) {
        if (isPrime(i)) {
            sum += i;
            countPrimes++;
        }
        i++;
    }

    return sum;
}

// function sumOfNPrimes(n) {
//     let sum = 0;
//     let countPrimes = 0;
//     let i = 2;

//     while (countPrimes < n) {
//         if (isPrime(i)) {
//             sum += i;
//             countPrimes++;
//         }
//         i++;
//     }

//     return sum;
// }