let containers = document.querySelectorAll('div')
containers.forEach(e => {
    e.addEventListener('dragover', over);
    e.addEventListener('dragleave', leave);
    e.addEventListener('drop', drop)
});

let img = document.querySelector('img')
img.addEventListener('drag', drag)
img.addEventListener('dragend', end)


function drop(e){
    e.preventDefault()
    this.append(img) 
}
function drag(e){
    e.preventDefault();
    img.style.display = "none";
    containers.forEach(e => e.classList.add("onDrag"))  
}
function end(e){
    e.preventDefault();
    img.style.display = "";
    containers.forEach(e => e.classList.remove("onDrag"))
}
function over(e){
    e.preventDefault();
    e.target.classList.add('onOver')
}
function leave(e){
    e.preventDefault();
    e.target.classList.remove('onOver')
}

