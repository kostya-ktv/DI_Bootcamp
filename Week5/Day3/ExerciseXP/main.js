// // Exercise 1 : Comparison
// // Instructions
// // Create a function called compareToTen that takes a number as an argument.
// // The function should return a Promise that tests if the value of the given argument is less or greater than 10.
// // Test:
// Exercise 2 : Promises
// Instructions
// Create a promise that resolves itself in 4 seconds and returns a “success” string.
// Read about Promise.resolve() and Promise.reject().
// How can you make your promise from part 1 shorter using Promise.resolve() and console.log “success”?
// Add code to catch errors and console.log ‘Ooops something went wrong’.
// Exercise 3 : Resolve & Reject
// Instructions
// Use Promise.resolve(value) to create a promise that will resolve itself with a value of 3.
// Use Promise.reject(error) to create a promise that will reject itself with the string “Boo!”



function compareToTen(num) {
    setTimeout(() => {
        return new Promise((resolve, reject)=> {
        
            num > 10 && resolve(" Success ");
            num < 10 && reject("Failed")
        }).then(result => console.log(result + " ----OK"))
          .catch(result => console.log(result + "-----Error"));
    }, 4000)
    
}
compareToTen(9)