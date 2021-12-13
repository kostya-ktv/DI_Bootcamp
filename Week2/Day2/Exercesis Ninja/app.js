// Exercise 1 : Age Difference
// Instruction
// Given the years two people were born, find the date when the younger one is exactly half the age of the older.
// Notes: The dates are given in the format YYYY

let first = 1990;
let second = 1967;

??????


// Exercise 2 : Zip Codes
// Instruction
// Harder exercise
// Hint : This exercise has 2 parts. First, do this exercise without Regular Expressions, then do it using Regular Expressions

// While working in a Post Office you must have the clients’ zip code in order to send them their letters.
// Ask the client for their zip code and console.log “success” or “error” based on the following rules.
// Zip codes consists of 5 numbers
// Must only contain numbers
// Must not contain any whitespace (spaces)
// Must not be greater than 5 digits in length

// let number = prompt('enter your zip code');
// number.length == 5 && (Number.parseInt(number) !== NaN)? console.log('success'): console.log("error");;

// let pattern = /^\d\d\d\d\d$/;
// pattern.test(number) ? console.log("success") : console.log("error");


// Exercise 3 : Secret Word
// Instruction
// Harder exercise
// Hint : Use Regular Expressions

// Prompt the user for a word and save it to a variable.
// Delete all the vowels of the word and console.log the result.
// Bonus: Replace the vowels with another character and console.log the result


// let word = prompt('Enter your word');
// let pattern = /[aeiou]/g;
// console.log(word.replace(pattern, ""));
// console.log(word.toLowerCase().replace(/a/g, 1).replace(/e/g, 2).replace(/i/g, 3).replace(/o/g, 4).replace(/u/g, 5));