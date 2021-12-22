let listTasks = [];
let id = 0;

let submitButton = document.querySelector('#submit')
let input = document.querySelector('input')
let form = document.querySelector('form')
let taskZone = document.querySelector('.listTasks')
form.addEventListener('submit', addTask);

function addTask(e){
    e.preventDefault();
    let taskDiv = document.createElement('div');
    taskDiv.classList.add('tasks');

    let deleteIcon = document.createElement('img')
    deleteIcon.id = "deleteIcon"
    deleteIcon.src = "./close.svg"
    deleteIcon.addEventListener('click', deleteTask);
    

    let checkBox = document.createElement('input')
    checkBox.id = "checkbox"
    checkBox.type = "checkbox"
    checkBox.addEventListener('click', selectTask)

    let textZone = document.createElement('span')
    textZone.id = "textZone"
    textZone.dataset.id = id + 1;

    let task = { 
        id : id + 1,
        done: false,
        text : input.value
    }
    
    listTasks.push(task);
    textZone.innerText = input.value;
    input.value = "";
    taskDiv.append(deleteIcon, checkBox, textZone);
    taskZone.append(taskDiv); 

    id++;
   
}
function deleteTask(e){
    e.target.parentNode.remove();
    let deleteId = e.target.parentElement.children[2].dataset.id;
    
    listTasks = listTasks.filter(el => el.id != deleteId)
    console.log(listTasks);
   
}
function selectTask(e){
    let task = e.target.nextSibling;
    task.classList.toggle('finished');   
    for(let el of listTasks){
        if(el.id == task.dataset.id) task.done = !task.done;       
    }
         
}


