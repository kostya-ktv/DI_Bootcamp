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

// // #################################Exercise 1 : Favorite Color
// let me = ["my","favorite","color","is","blue"];
// console.log("Hello," + me[0] + " " + me[1] + " " + me[2] + " " + me[3] + " " + me[4] + "!")

// // Exercise 2 : Mixup
// let str1 = "mix"
// let str2 = "pod" 
// let newWord = str2.slice(0, 2) + str1.slice(2) + " " + str1.slice(0, 2) + str2.slice(2)
// console.log(newWord)

// // #################################Exercise 3 : Calculator

// let a = +prompt("first");
// let operation = prompt(" + , - , * , / ");
// let b = +prompt("Second");
// switch (operation){ 
//     case "+": alert(a + b);break; 
//     case "-": alert(a - b);break;
//     case "*": alert(a * b);break;
//     case "/": alert(a / b);break;
// }

// // #################################Exercise 1 : Find Nemo
// let string = prompt("Some sentence");
// let index = string.toLowerCase().indexOf("nemo");
// if(index >= 0) alert("I found Nemo at " + index + " index!");
// else alert("I can’t find Nemo");


// #################################Exercise 2 : Evaluation(2)
    // let c;
    // let a = 34;
    // let b = 21;
    // a = 2;
    // a + b

    // // // What will be the outcome of a + b?
    // // 23
    // // // What is the value of c?
    // // underfind
    // // // Analyse the code below what will be the outcome?
    // // // console.log(3 + 4 + '5');
    // 75

    // #################################Exercise 3 : Ask For Numbers
    // let arr = prompt("enter number separeted by commas");
    // let sum = 0;
    // for(let el of arr.split(",")){
    //     sum += +el;
    // }
    // alert(sum)

    // // #################################Exercise 4 : Boom
    // let word = +prompt("enter number");
    // let res = "Boom";

    //     if(word >= 2){
    //         let str = '';
    //         for(let i = 0; i < word; i++){
    //             str += "o";
    //         }
    //         res = "B" + str + "m";
    //     }

    //     if(!(word % 2) && !(word % 5)){
    //         res += "!";
    //         res = res.toUpperCase();
    //     }
        
    // console.log(res)


    // #################################Daily Challenge: JS Arrays & Methods
    // #################################Exercise 1:
    // let fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
    // fruits.shift();
    // fruits.sort();
    // fruits.push("Kiwi");
    // fruits.splice(0, 1);
    // fruits.reverse()
    // console.log(fruits);

//    // #################################Exercise 2:
//     let moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
//     console.log(moreFruits[1][1])