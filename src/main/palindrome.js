"use strict"

const combinatorics = require("js-combinatorics");
const minimist = require("minimist");

const args = process.argv.slice(2);
const parsedArgs = minimist(args);
const combinations = combinatorics.permutationCombination(parsedArgs._);

console.log("Here are all possible palindromes from values " + args);

combinations.map((combination) => {
    return arrayToText(combination).toLowerCase();
}).filter((combination) => {
    return isPalindrome(combination);
}).forEach((combination) => {
    console.log(combination);
});

function arrayToText(arr) {
    return arr.join("");
}

function isPalindrome(str) {
    return str === reverseString(str);
}

function reverseString(str) {
    return str.split("").reverse().join("");
}

module.exports = {
    isPalindrome
}