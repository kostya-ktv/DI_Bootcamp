let aboutMe = document.getElementById('aboutMe'),
    buttonShowHobby = document.getElementById('showhobby')

fetch('http://localhost:3000/aboutMe/')
    .then(data => data.json())
    .then(data=> {aboutMe.innerHTML = `
        My name is ${data.name} \n
        I am ${data.age} old
    `});
