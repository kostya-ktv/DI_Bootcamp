const gameInfo = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
   ];

let usernames = gameInfo.map(el=> {return el.username});
let scoreBiggestFive = gameInfo.filter(el=> el.score > 5);
console.log(usernames);
for(let el of scoreBiggestFive){
    console.log(Object.entries(el).toString())
}
console.log(gameInfo.map(el => el.score).reduce((val, el)=>{return val + el;}));