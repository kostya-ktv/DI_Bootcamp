// Exercise 1 : List Of People
// Instructions
// let people = ["Greg", "Mary", "Devon", "James"]
// Part I - Review About Arrays
// Write code to remove “Greg” from the people array.

// Write code to replace “James” to “Jason”.

// Write code to add your name to the end of the people array.

// Write code that console.logs Mary’s index. take a look at the indexOf method on Google.

// Write code to make a copy of the people array using the slice method.
// The copy should NOT include “Mary” or your name.
// Hint: remember that now the people array should look like this let people = ["Mary", "Devon", "Jason", "Yourname"];
// Hint: Check out the documentation for the slice method

// Write code that gives the index of “Foo”. Why does it return -1 ?

// Create a variable called last which value is the last element of the array.
// Hint: What is the relationship between the index of the last element in the array and the length of the array?
// let people = ["Greg", "Mary", "Devon", "James"]
// people.splice(people.indexOf("Greg"), 1);
// people[people.indexOf("James")] = "Jason";
// people.push("Kostya");

// console.log(people.indexOf("Mary"));

// let newArr = people.slice(1)
// console.log(people.indexOf("Foo"));

// let last = people[people.length-1];
// console.log(last)

// console.log(newArr);
// console.log(people);

// for(let el of people){
//     if(el === "Jason") break;
//     console.log(el);
// }

// Exercise 2 : Your Favorite Colors
// Instructions
// Create an array called colors where the value is a list of your five favorite colors.
// Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
// Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
// Hint : create an array of suffixes to do the Bonus

// let colors = ["white", "black", "green", "blue", "red"];
// for (let index = 0; index < colors.length; index++) {
//     switch (index) {
//         case 0:
//             console.log(`${colors[index]} : My ${index + 1}st choice`)
//             break;
    
//         case 1:
//             console.log(`${colors[index]}: My ${index + 1}nd choice`)
//             break;
    
//         case 2:
//             console.log(`${colors[index]}: My ${index + 1}rd choice`)
//             break;
    
//         default:
//             console.log(`${colors[index]}: My ${index + 1}rd choice`)
//             break;
//     }
   
// }

// // Exercise 3 : Repeat The Question
// // Instructions
// // Prompt the user for a number.
// // Hint : Check the data type you receive from the prompt (ie. Use the typeof method)

// // While the number is smaller than 10 continue asking the user for a new number.
// // Tip : Which while loop is more relevant for this situation?
// do {
//     var num = parseFloat(prompt("NUMBER"))
// } while(num < 10 || isNaN(num))

// Exercise 4 : Building Management
// Instructions

// let building = {
//     numberOfFloors : 4,
//     numberOfAptByFloor : {
//         firstFloor : 3,
//         secondFloor : 4,
//         thirdFloor : 9,
//         fourthFloor : 2,
//     },
//     nameOfTenants : ["Sarah", "Dan", "David"],
//     numberOfRoomsAndRent:  {
//         sarah: [3, 990],
//         dan :  [4, 1000],
//         david : [1, 500],
//     },
// }
// console.log(building.numberOfFloors);
// console.log(building.numberOfAptByFloor.firstFloor);
// console.log(building.numberOfAptByFloor.thirdFloor);
// console.log(building.nameOfTenants[1] + " " + building.numberOfRoomsAndRent.dan);
// if(building.numberOfRoomsAndRent.sarah[1] + building.numberOfRoomsAndRent.david[1] > building.numberOfRoomsAndRent.dan[1]) building.numberOfRoomsAndRent.dan[1] = 1200;



// Exercise 5 : Family
// Instructions
// Create an object called family with a few key value pairs.
// Using a for loop, console.log the keys of the object.
// Using a for loop, console.log the values of the object.

// let family = {
//     mother : "Sara",
//     father : "Tomas",
//     dog : "Baks",
//     cat : "Garfild"
// }
// for(let entry of Object.entries(family)){
//     console.log(entry);
// }

// Exercise 6
// Instructions
// let details = {
//   my: 'name',
//   is: 'Rudolf',
//   the: 'raindeer'
// }
// Given the object above and using a for loop, console.log “my name is Rudolf the raindeer”
// let details = {
//     my: 'name',
//     is: 'Rudolf',
//     the: 'raindeer'
//   }
//   let res = "";
//   for(let entry of Object.entries(details)){
//       res += entry[0] + " " + entry[1] + " "
//   }
//   console.log(res);

// Exercise 7 : Secret Group
// Instructions
// let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"]
// A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
// Hint: a string is an array of letters
// Console.log the name of their secret society. The output should be “ABJKPS”
// let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
// let res = "";
// for(let el of names.sort()){
//     res += el.charAt(0);
// }
// console.log(res);