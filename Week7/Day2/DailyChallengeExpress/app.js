const dto = require('./public/someDTO')
const app = require('./express-server');

app.get('/', (req, res) => {
    res.redirect('./home_page/index.html')
})
app.get('/contactMe', (req, res) => {
    res.redirect('./contact_form_page/contact-form.html')
})

app.post('/formData', (req, res) => {
    dto.incomingMessages.push(req.body);
    res.send(dto.incomingMessages);
})

app.get('/aboutMe/', (req, res) => {
    res.send(dto)
})

app.get('/aboutMe/photo', (req, res) => {  
    res.redirect(dto.photo);
})
app.get('/aboutMe/:hobby', (req, res) => {
    let {hobby} = req.params; 
    console.log(hobby);
    if (isNaN(Number(hobby)) && (hobby !== 'true' && hobby !== 'false')) {      
        res.send(`SELECTED ${hobby}. ALL HOBBIES ${dto.hobby.toString()}`)
    } else {
        throw new Error("ERROR");
    }
    
})


