// Exercise 1 : Location
// Instructions
// Analyze the code below. What will be the output?
// const person = {
//     name: 'John Doe',
//     age: 25,
//     location: {
//         country: 'Canada',
//         city: 'Vancouver',
//         coordinates: [49.2827, -123.1207]
//     }
// }

// const {name, location: {country, city, coordinates: [lat, lng]}} = person;

// console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);
// -->I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)
// main.js:16

// Exercise 2: Display Student Info
// Instructions
// Create a function called displayStudentInfo(studentObject) that accepts an object as a parameter.
// For example displayStudentInfo({first: 'Elie', last:'Schoppik'}).
// Destructure the parameter inside the function and return a string as the example seen below:
// const person = {
//     firstname: 'John',
//     lastname : 'Doe',
//     age: 25,
//     location: {
//         country: 'Canada',
//         city: 'Vancouver',
//         coordinates: [49.2827, -123.1207]
//     }
// }
// function displayStudentInfo({firstname, lastname}){
//     return `Your full name is ${firstname} ${lastname}`;
// }
// console.log(displayStudentInfo(person))

// // output : 'Your full name is Elie Schoppik'`


// Exercise 3: User & Id
// Instructions
// Using this object 

// Using methods taught in class, turn the users object into an array:
// Excepted output: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
// FYI : The number is their ID number.

// Modify the outcome of part 1, by multipling the user’s ID by 2.
// Excepted output: [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]
// const users = { user1: 18273, user2: 92833, user3: 90315 };
// console.log(Object.entries(users)
//                   .toString());
// console.log(Object.entries(users)
//                   .map(el=> [el[0],el[1] * 2])
//                   .toString());
// Exercise 4 : Person Class
// Instructions
// Analyze the code below. What will be the output?
// class Person {
//   constructor(name) {
//     this.name = name;
//   }
// }

// const member = new Person('John');
// console.log(typeof member); //----object

// Exercise 5 : Dog Class
// Analyze the options below. Which constructor will successfully extend the Dog class?
// class Dog {
//     constructor(name) {
//       this.name = "fff";
//     }
//   };

// class Labrador extends Dog {
//     constructor(size, name) {
//       super(name);
//       this.size = size;
      
//     }
//   };
//   let dogi = new Labrador(5, "ewe")
//   console.log(dogi);

// Exercise 6 : Challenges
// Evaluate these (ie True or False)
// console.log([2] === [2]);
// console.log({} === {});

// What is, for each object below, the value of the property number ?
// const object1 = { number: 5 }; 
// const object2 = object1; 
// const object3 = object2; 
// const object4 = { number: 5}; 
// object1.number = 4;
// console.log(object1.number + " " + object2.number + " " + object3.number + " " + object4.number);

// Create a class Animal with the attributes name, type and color
// class Animal {
//   constructor(name, type, color){
//     this.name = name;
//     this.type = type;
//     this.color = color;
//   }  
// }
// class Mamal extends Animal{
//   constructor(name, type,color){
//     super(name, type, color);
//   }
//   sound(){
//     console.log("AAAAAA");
//   }
// }
// class Cow extends Animal{
//   constructor(name, type,color){
//     super(name, type, color);
//   }
//   sound(){
//     console.log("MUMUMU");
//   }
// }
// let mamal = new Mamal('Gretta', 'east', 'black')
// let cow = new Cow('Barny', 'crazy', 'white')

