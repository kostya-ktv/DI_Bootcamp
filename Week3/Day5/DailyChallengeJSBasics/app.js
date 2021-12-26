function matrix( rows, cols, defaultValue){
     let arr = [];
    for(var i=0; i < rows; i++){
        arr.push([]);
        arr[i].push( new Array(cols));
        for(var j=0; j < cols; j++){
          arr[i][j] = defaultValue;
        }
    }
    return arr;
}

array = matrix( 7, 7, " ");

for(let i = 0; i < 7; i++){
    if(i == 1 || i == 5){
        for(let k = 1; k < 7; k++){
            array[k][i] = "*"
        }
    }
    if(i == 0 || i == 3){
        for(let k = 2; k < 5; k++){
            array[i][k] = "*"
        }
    }
}
let str = "";
for(let i = 0; i < array.length; i++){  
    for(let k = 0; k < array.length; k++){
        str += array[i][k]       
    }
    str += '\n'
}
console.log(str);