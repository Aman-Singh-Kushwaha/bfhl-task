// src/helpers/dataProcessing.js
const isPrime = require('./primeChecker');

const processData = (data) => {
    const result = {
        numbers: [],
        alphabets: [],
        highestLowercaseAlphabet: [],
        isPrimeFound: false,
    };

    data.forEach((item) => {
        if (!isNaN(item)) {
            result.numbers.push(item);
            if (isPrime(Number(item))) result.isPrimeFound = true;
        } else if (/^[a-zA-Z]$/.test(item)) {
            result.alphabets.push(item);
            if (/^[a-z]$/.test(item)) {
                result.highestLowercaseAlphabet.push(item);
            }
        }
    });

    if (result.highestLowercaseAlphabet.length > 0) {
        result.highestLowercaseAlphabet = [
            result.highestLowercaseAlphabet.sort().slice(-1)[0],
        ];
    }

    return result;
};

module.exports = processData;
