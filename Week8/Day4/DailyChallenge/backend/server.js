const cors = require('cors');
const express = require('express');

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get('/hello', (req, res)=>{
    res.json("hello")
})

app.post('/world', (req, res)=>{
    
    res.json(req.body.message)
})

app.listen(5000, ()=>{
    'server is listening on server 5000'
})
