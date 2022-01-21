// Exercise 1 : Reading From A File In Node.JS

let fs = require('fs');
fs.readFile('text.txt', 'utf-8', function (err, data) {
    if (err) {
        return  console.error(err)
        
    }
    console.log("--------------------------");
    console.log(data);
});




// Exercise 2 : Writing Files With Node JS

fs.writeFile("fs.txt", "BLA BLA", function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
});

fs.appendFile('fs.txt',"\n more bla bla bla ", function (err) {
    if (err) {
        return console.error(err)

    }
    console.log("The file was update!");
});

fs.unlink('fs.txt', function (err) {
    console.log('file was deleted');
});