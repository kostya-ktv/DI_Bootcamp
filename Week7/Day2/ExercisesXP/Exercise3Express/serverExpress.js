const exp = require('express')
const app = exp();

app.listen(5000, ()=>{
  console.log('listening on port 5000');
})

app.get('/',(req,res)=>{
    res.send("<h1>This is an HTML tag</h1>")
})