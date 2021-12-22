// document.querySelector('input').onkeydown = (event) => {return /[a-z]/i.test(event.key)};
document.querySelector('input').addEventListener('keydown', (e)=>{return /[a-z]/i.test(e.key)})