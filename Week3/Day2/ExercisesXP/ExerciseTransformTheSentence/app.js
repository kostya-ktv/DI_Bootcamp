var allBoldItems;
getBold_items()
function getBold_items(){
    allBoldItems = document.querySelectorAll('strong')   
}

let p = document.querySelector('p');
p.addEventListener('mouseover', ()=>{highlight(allBoldItems)})
p.addEventListener('mouseout', ()=>{return_normal(allBoldItems)})

function highlight(elements){
    elements.forEach(element => {
        element.style.color = "blue"
    });
}
function return_normal(elements){
    elements.forEach(element => {
        element.style.color = "black"
    });
}

