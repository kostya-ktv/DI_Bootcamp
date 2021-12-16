function playTheGame(){
    let answer = prompt("would like to play the game ");
    if(answer == "false") return alert("no problem goodbye");
    let userNumber = askingNumber();
    let computerNumber = Math.floor(Math.random() * 10)
    let tryCount = 0;
    return test(userNumber, computerNumber)


    function test(userNum,computerNum){
        if(tryCount == 2) return alert("out of chances");
        if(userNum > computerNum){
            alert("Your number is bigger then the computer's, guess again");
            tryCount++;
            return test(askingNumber(), computerNumber);
        }
        if(userNum < computerNum){
            alert("Your number is smaller then the computer's, guess again");   
            tryCount++;
            return test(askingNumber(), computerNumber);
        } 
        return alert("WINNER");
    }

    function askingNumber(){
        let num;
        do {
            num = parseFloat(prompt("enter a number between 0 and 10"))
            if(isNaN(num)) alert("Sorry Not a number");
            if(num > 10 || num < 0) alert("Sorry its not a good number");
    
        } while(num > 10 || isNaN(num));
        return num;

    }
}