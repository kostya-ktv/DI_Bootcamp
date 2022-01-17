const contactForm = document.querySelector('form'),
    emailInput = document.querySelector('#emailInput'),
    textInput = document.querySelector('#textMessage'),
    messageList = document.querySelector('.messageList')

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let req = {
        email : emailInput.value,
        message: textInput.value    
    }

    fetch('http://localhost:3000/formData',{
        method:'POST',
        headers:{
        'Content-Type': 'application/json'
        },  
        body: JSON.stringify(req)
    })
    .then(data => data.json())
    .then(data => { 
        messageList.innerHTML = '';
        data.forEach(el => {
            let p = document.createElement('p');
            p.innerText = `email: ${el.email} \n message: ${el.message}` ;
            messageList.append(p);
        });
        contactForm.reset();
    })
})