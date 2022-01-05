// Create two functions that use promises which can be chained.
// The first function called makeAllCaps(), should take an array of words as an argument and capitalize them.
// The second function called sortWords(), should sort the words in alphabetical order.
// If the array contains anything but strings, it should throw an error.
// makeAllCaps(['tomatos','avocado', 'cucumber'])
// sortWords(['tomatos','avocado', 'cucumber'])
// function makeAllCaps(arr){
//     return new Promise((resolve, reject)=>{
//         resolve(arr);
//         reject("error");
//     })
//     .then(result => result = result.map(el => el.toUpperCase()))
//     .then(result => console.log(result))
//     .catch(error => console.log(error))
// }
// function sortWords(arr){
//     return new Promise((resolve, reject)=>{
//         resolve(arr);
//         reject("error");
//     })
//     .then(result => result.sort())
//     .then(result => console.log(result))
//     .catch(error => console.log(error))
// }

// 2nd Daily Challenge
let morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  }`




// let someString = prompt('Enter a sentence');
let someString = 'thYYi';
let translationMorse = '';

toJs(morse);
toMorse(someString);
console.log(translationMorse);


function toMorse(morseObj) {
    return new Promise((resolve, reject) => {
        [...morseObj].every(el => Object.hasOwn(morse, el) ? translationMorse += morse[el] + '\n' : reject(el))
    })
    .catch(error => console.log('morse doesnt include character : ' + error));
}

function toJs(obj) { 
    return new Promise((resolve, reject) => obj ? resolve(morse = JSON.parse(obj)) : reject("empty object"))
    .catch(error => console.log(error + '-error-'))
}
