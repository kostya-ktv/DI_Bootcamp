let number = prompt("enter a number of bottles")
let bottles = number;
for(let i = 1; i <= number; i++){
    if(printSong(bottles, i) == false) break;
}

function printSong(countBottles, countDownBottles){
    console.log(`${countBottles} bottles of beer on the wall \n${countBottles} bottles of beer`)
    
    countDownBottles == 1 ? 
        console.log(`Take ${countDownBottles} down, pass it around`) 
        : 
        console.log(`Take ${countDownBottles} down, pass them around`)
    if(countBottles - countDownBottles <= 0) {
        console.log("no more bottles");
        return false;
    }
    console.log(`${countBottles - countDownBottles} bottles of beer on the wall \n`)
     bottles = countBottles - countDownBottles;
}