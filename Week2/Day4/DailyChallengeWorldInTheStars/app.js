function stars(){
    let sentence = prompt("Some sent sentence separated by commas").split(",");
    printArray(feelArray(sentence));  
}

function printArray(array){
    for(let el of array){
        console.log(el)
    }
}

function feelArray(arr){

    let bigger = findBiggerLength(arr);   
    for(let i = 0; i < arr.length; i++){
        if(arr[i].length < bigger){   
            arr[i] = padString(arr[i], bigger, " ")
        }  
    }
    arr.unshift(padString("*", bigger, "*"));
    arr.push(padString("*", bigger, "*"));
    return arr;
}

function padString(str, lengthRequire, padElement){
    do{
        str += padElement;                 
      } while(str.length != lengthRequire);
      str = "*" + str + "*";
    return str;
}

function findBiggerLength(arr){
    let bigger = 0;
    for(let el of arr){
        if(el.length > bigger) bigger = el.length;
    }
    return bigger + 1;
}

stars();
