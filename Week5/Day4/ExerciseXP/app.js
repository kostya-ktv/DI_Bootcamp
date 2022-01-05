
// Exercise 1: Conversion
// Instructions
// Convert the below promise into async await:
// fetch("https://swapi.dev/api/starships/9/")
//     .then(response => response.json())
// //     .then(console.log);

// async function showStarShips() {
//     try { 

//     let response = await fetch("http://random-word-api.herokuapp.com/word?number=1");
//     let starShips = await response.json();
//     console.log(starShips);
//     return starShips;
//     } catch(e) {
//         console.log(e);
//     }
// }
// showStarShips();

// Exercise 2: Analyze
// Instructions

function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();

// --calling

// --resolved
