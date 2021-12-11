//string '534'
// 5 + '34'
// //number 1
//     5 - '4'
// // 0
//     10 % 5
// // 5
//     5 % 10
// 'JavaScript'
//     "Java" + "Script"
// // '  '
//     " " + " "
// // ' 0'
//     " " + 0
// // 2
//     true + true
// // 1
//     true + false
// // 1
//     false + true
// // -1 
//     false - true
// // -1
//     3 - 4
// //NaN
//     "Bob" - 

// // Exercise 1 : Favorite Color
// let me = ["my","favorite","color","is","blue"];
// console.log("Hello," + me[0] + " " + me[1] + " " + me[2] + " " + me[3] + " " + me[4] + "!")

// // Exercise 2 : Mixup
// let str1 = "mix"
// let str2 = "pod" 
// let newWord = str2.slice(0, 2) + str1.slice(2) + " " + str1.slice(0, 2) + str2.slice(2)
// console.log(newWord)

// // Exercise 3 : Calculator

let a = +prompt("first");
let operation = prompt(" + , - , * , / ");
let b = +prompt("Second");
switch (operation){ 
    case "+": alert(a + b);break; 
    case "-": alert(a - b);break;
    case "*": alert(a * b);break;
    case "/": alert(a / b);break;
}
