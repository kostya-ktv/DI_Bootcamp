
// Analyze these pieces of code before executing them. What will be the outputs ?
// ------1------
// -----> ['bread', 'carrot', 'potato', 'chicken', 'apple', 'orange']
// const fruits = ["apple", "orange"];
// const vegetables = ["carrot", "potato"];

// const result = ['bread', ...vegetables, 'chicken', ...fruits];
// console.log(result);

// // ------2------
// //------->['U', 'S', 'A']
// const country = "USA";
// console.log([...country]);

// // ------Bonus------
// //---->[undefined, undefined]
// let newArray = [...[,,]];
// console.log(newArray);


// Exercise 2 : Employees
// Using the map() method, say hello to the users using only their firstname (ie. “Hello Bradley”, “Hello Chloe” ect…)
// Using the filter() method, create a new array, containing only the Full Stack Residents.
// Bonus : Chain the filter method with a map method, to congratulate the Full Stack Residents (ie. “Good job Bradley”, “Good Job Chloe” ect…)
// let users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
//              { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
//              { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
//              { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
//              { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
//              { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
//              { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];
// users.forEach(el => console.log(el.firstName));
// let onlyFullStack = users.filter(el => el.role == 'Full Stack Resident')

// Exercise 3 : Star Wars
// Instructions
// Using this array let epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
// 1. Use the reduce() method to combine all of these into a single string.
// let epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away']
// let str = epic.reduce((accum, curr) => accum + " " + curr);
// console.log(str);

// Exercise 4 : Employees #2
// Using the filter() method, create a new array, containing the students that passed the course.
// Bonus : Chain the filter method with a map method, to congratulate the students with their name and course name (ie. “Good job Jenner, you passed the course in Information Technology”, “Good Job Marco you passed the course in Robotics” ect…)
// let student = [{name: "Ray", course: "Computer Science", isPassed: true}, 
//                {name: "Liam", course: "Computer Science", isPassed: false}, 
//                {name: "Jenner", course: "Information Technology", isPassed: true}, 
//                {name: "Marco", course: "Robotics", isPassed: true}, 
//                {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
//                {name: "Jamie", course: "Big Data", isPassed: false}];
// let passedCourse = student.filter(el => el.isPassed);
