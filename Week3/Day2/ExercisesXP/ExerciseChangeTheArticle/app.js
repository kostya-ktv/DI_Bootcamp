
let h1 = document.querySelector('h1');
h1.addEventListener('mouseover', ()=>{
    document.body.style.fontSize = getRandomFontSize();
})
let h2 = document.querySelector('h2');
h2.addEventListener('mouseover', (e)=>{
    fade(e.target)
})
console.log(h1.innerText);


document.querySelector('article').lastElementChild.remove();

document.querySelector('h2').addEventListener('click', (e) => {
    e.target.style.backgroundColor = "red";
})

document.querySelector('h3').addEventListener('click', (e) => {
    e.target.style.display = "none";
})

let button = document.createElement('button');
button.innerText = "Click"
button.onclick = () => {
    document.querySelectorAll('p').forEach(e => e.style.fontWeight = "bold")
}
document.body.append(button)


function getRandomFontSize(){
    return Math.floor(Math.random() * 100) + "px"
}

function fade(element) {
    element.style.opacity = 1; 
    let timer = setInterval(function () {  
        element.style.opacity -= 0.1;
        if(element.style.opacity == 0){
            element.style.display = "none";
            clearInterval(timer)
        }
    }, 100);
}


