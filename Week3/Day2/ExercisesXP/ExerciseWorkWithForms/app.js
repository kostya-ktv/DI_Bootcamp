let form = document.querySelector('form')
console.log(form);

// let fname = document.querySelector('#fname')
// let lname = document.querySelector('#lname')
let ul = document.querySelector('ul')
let fname = document.querySelector('input[name=fname]')
let lname = document.querySelector('input[name=lname]')
let submitButton= document.querySelector('#submit')

submitButton.addEventListener('click', (e)=>{
    
    if(fname.value && lname.value){
        e.preventDefault();
        let firstName = document.createElement('li')
        firstName.innerText = `first name of the user ${fname.value}`;
        ul.append(firstName)
        let lastname = document.createElement('li')
        lastname.innerText = `last name of the user ${lname.value}`;
        ul.append(lastname)
        fname.value = ""
        lname.value = ""
    }
})
console.log(fname);
console.log(lname);