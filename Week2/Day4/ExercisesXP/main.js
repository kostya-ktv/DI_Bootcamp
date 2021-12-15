// Exercise 1 : Information
// Instructions
// Part I : function with no parameters

// Create a function called infoAboutMe() that takes no parameter.
// The function should console.log a sentence about you (ie. your name, age, hobbies ect…).
// Call the function.


// Part II : function with three parameters

// Create a function called infoAboutPerson(personName, personAge, personFavoriteColor) that takes 3 parameters.
// The function should console.log a sentence about the person (ie. “You name is …, you are .. years old, your favorite color is …”)
// Call the function twice with the following arguments:
// infoAboutPerson("David", 45, "blue")
// infoAboutPerson("Josh", 12, "yellow")

// let personName = "Tom";
// let personAge = 30;
// let personFavoriteColor = "white";

// function infoAboutMe(){
//     console.log("Hi iam Kostya, 31 years old, i like a music");
// }
// function infoAboutPerson(name, age, color){
//     console.log(`You name is ${name} you are ${age} years old, your favorite color is ${color}`);
// }
// infoAboutMe();
// infoAboutPerson(personName, personAge, personFavoriteColor);
// infoAboutPerson("David", 45, "blue");
// infoAboutPerson("Josh", 12, "yellow");


// Exercise 2 : Tips
// Instructions
// John created a simple tip calculator to help calculate how much to tip when he and his family go to restaurants.

// Create a function named calculateTip() that takes no parameter.

// Inside the function, ask John for the amount of the bill.

// Here are the rules
// If the bill is less than $50, tip 20%.
// If the bill is between $50 and $200, tip 15%.
// If the bill is more than $200, tip 10%.

// Console.log the tip amount and the final bill (bill + tip).

// Call the calculateTip() function.


// function calculateTip(){
//     do {
//         var amount = parseFloat(prompt("amount of the bill"))
//     } while(isNaN(amount))
//     let tip = 0;
//     if(amount < 50){
//         tip = amount / 100 * 20;       
//     }else if(amount > 50 && amount < 200){
//         tip = amount / 100 * 15;
//     }else if(amount > 200){
//         tip = amount / 100 * 10;
//     }
//     console.log(`tip amount = ${tip} and the final bill is ${tip + amount}`);
// }
// calculateTip();


// Exercise 3 : Find The Numbers Divisible By 23
// Instructions
// Create a function call isDivisible() that takes no parameter.

// In the function, loop through numbers 0 to 500.

// Console.log all the numbers divisible by 23.

// At the end, console.log the sum of all numbers that are divisible by 23.

// Bonus: Add a parameter divisor to the function.

// function isDivisible(divisor){
//     let sum = 0;
//     for(let i = 1; i <= 500; i++){
//         if(i % divisor == 0){
//             sum += i;
//             console.log(i + " divisible by " + divisor);
//         }
//     }
//     console.log(sum);
// }

// isDivisible(3);

// Exercise 4 : Shopping List
// Add the stock and prices objects to your js file.

// Create an array called shoppingList with the following items: “banana”, “orange”, and “apple”. It means that you have 1 banana, 1 orange and 1 apple in your cart.

// Create a function called myBill() that takes no parameters.

// The function should return the total price of your shoppingList. In order to do this you must follow these rules:
// The item must be in stock.
// If the item is in stock find out the price in the prices object.

// Call the myBill() function.

// Bonus: If the item is in stock, decrease the item’s stock by 1

// let stock = { 
//     "banana": 6, 
//     "apple": 0,
//     "pear": 12,
//     "orange": 32,
//     "blueberry":1
// }  

// let prices = {    
//     "banana": 4, 
//     "apple": 2, 
//     "pear": 1,
//     "orange": 1.5,
//     "blueberry":10
// } 

// let shoppingList = ["banana", "orange", "apple"];
// function myBill(){
//     let bill = 0;
//     for(let item of shoppingList){
//         if(stock[item] != undefined && stock[item] != 0){ 
//             bill += prices[item]; 
//             stock[item]--;          
//             console.log(stock[item]);
//         }
//     }
//     console.log(bill);
// }
// myBill()
// console.log(stock);

// Exercise 5 : What’s In My Wallet ?
// Instructions
// Note: Read the illustration (point 4), while reading the instructions

// Create a function named changeEnough(itemPrice, amountOfChange) that receives two arguments :
// an item price
// and an array representing the amount of change in your pocket.

// In the function, determine whether or not you can afford the item.
// If the sum of the change is bigger or equal than the item’s price (ie. it means that you can afford the item), the function should return true
// If the sum of the change is smaller than the item’s price (ie. it means that you cannot afford the item) the function should return false

// Change will always be represented in the following order: quarters, dimes, nickels, pennies.
// A quarters is 0.25
// A dimes is 0.10
// A nickel is 0.05
// A penny is 0.01

// function changeEnough(itemPrice, amountOfChange){
//     let sum = amountOfChange[0] * 0.25 
//                 + amountOfChange[1] * 0.10
//                 + amountOfChange[2] * 0.05
//                 + amountOfChange[3] * 0.01 ;
//     return sum >= itemPrice;
// }

// console.log(changeEnough(9.25, [25, 20, 5, 0]));
// console.log(changeEnough(0.75, [0,0,20,5]));
// console.log(changeEnough(14.11, [2,100,0,0]));

// Exercise 6 : Vacations Costs

function hotelCost(mount){    
    return mount * 140;
}
function planeRideCost(dest){
    if(dest == "London") return 183; 
    if(dest == "Paris") return 220; 
    return 300;
}
function rentalCarCost(number){   
    let sum = 40 * number;
    return number < 10 ? sum : sum - (sum / 100 * 5);
}

function totalVacationCost(){
    let mount;
    let dest;
    let number;
    do {
        mount = parseInt(prompt("number of nights they would like to stay in the hotel."))
    } while(isNaN(mount) || mount <= 0)
    do {
        dest = prompt("destination");
    }while(Number(dest))
    do {
        number  = parseInt(prompt("number of days they would like to rent the car"))
       } while(isNaN(number ) || number  <= 0)

    return hotelCost(mount) + planeRideCost(dest) + rentalCarCost(number) + "$";
}
console.log(totalVacationCost())
