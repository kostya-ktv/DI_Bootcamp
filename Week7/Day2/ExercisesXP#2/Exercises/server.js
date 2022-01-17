const exp = require('express')
const app = exp();

app.listen(3000, ()=>{
  console.log('listening on port 3000');
})
app.use('/',exp.static(__dirname+'/public/'));

app.get('/data',(req,res)=>{
    const user = {
        firstname: 'John',
        lastname: 'Doe'
    }
    res.send(JSON.stringify(user))
})
app.get('/:id',(req,res)=>{
    let id = req.params;
    console.log(id);
    res.send(id);
})