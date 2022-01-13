const addTaskWindow = document.querySelector('.addTaskWindow'),
    container = document.querySelector('.container'),
    addLogo = document.querySelector('#addLogo'),
    addButton = document.querySelector('.addButton'),
    inputTask = document.querySelector('.inputTask'),
    taskArea = document.querySelector('.taskArea'),
    startDate = document.querySelector('.startDate'),
    finishDate = document.querySelector('.finishDate'),
    addForm = document.querySelector('.addForm'),
    listTasks = document.querySelector('.listTasks'),
    cancel = document.querySelector('.cancel');
let id = 0,
    arrayOfTasks = [];
    
class Task {
    constructor(title, description, startDate, finishDate, id, isComplete){
        this.title = title;
        this.description = description;
        this.startDate = startDate;
        this.finishDate = finishDate;
        this.id = id;
        this.isComplete = isComplete;
    }
}

addForm.addEventListener('submit', saveNewTask);
addLogo.addEventListener('click', ()=>{addTaskWindow.style.display = "block"});
cancel.addEventListener('click', ()=>{addTaskWindow.style.display = "none"});
createDivTask(new Task(
    'First task', 'here is a description', '1990', '1994', ++id, true
))
createDivTask(new Task(
    'Second task', 'here is a description', '1990', '1994', ++id, false
))

function saveNewTask(e) {
    e.preventDefault();
    let task = new Task(inputTask.value, taskArea.value, startDate.value, finishDate.value, ++id, false);
    arrayOfTasks.push(task);
    
    createDivTask(task);
    addTaskWindow.style.display = 'none';  
}
function createDivTask(taskObj) {
    localStorage.setItem(taskObj.id, JSON.stringify(taskObj));
    let divTask = document.createElement('div'),
        header = document.createElement('div'),
        taskTitle = document.createElement('h2'),
        flag = document.createElement('input'),
        details = document.createElement('p'),
        popUpWindow = document.createElement('div'),
        date = document.createElement('div'),
        deleteButton = document.createElement('button');

    deleteButton.classList.add('deleteButton');
    deleteButton.innerText = 'x';
    date.innerText = `until ${taskObj.finishDate} : remain 5 days`;
    flag.type = 'checkbox';
    flag.checked = taskObj.isComplete;
    divTask.classList.add('task');
    taskObj.isComplete && divTask.classList.add('complete');
    taskTitle.innerHTML = taskObj.title;
    details.innerHTML = `ID:${taskObj.id} ${taskObj.description}`;
    popUpWindow.classList.toggle('hide');
   
    divTask.dataset.id = taskObj.id;
    flag.addEventListener('click', taskFinish); 
    deleteButton.addEventListener('click', deleteTask);
    divTask.addEventListener('click', (e)=>{
        popUpWindow.classList.toggle('hide');
    })

    popUpWindow.append(details);
    header.append(flag, taskTitle, date)
    divTask.append(deleteButton, header, popUpWindow);
    listTasks.append(divTask);
}

function deleteTask(el) {
    el.stopPropagation();
    let deleteModalWindow = document.createElement('div'),
        yesButton = document.createElement('button'),
        noButton = document.createElement('button');
    
    yesButton.textContent = "YES delete task";
    noButton.textContent = "NO";
    deleteModalWindow.append(yesButton,noButton);
    deleteModalWindow.classList.add('deleteModalWindow');
    document.body.append(deleteModalWindow);
    yesButton.addEventListener('click', ()=>{
        deleteModalWindow.remove();
        localStorage.removeItem(el.target.parentNode.dataset.id);
        el.target.parentNode.remove();

    });
    noButton.addEventListener('click', ()=>{
        deleteModalWindow.remove();
    })
    
}

function taskFinish(e) {
    arrayOfTasks.forEach(el => {
        if(el.id == e.target.parentNode.parentNode.dataset.id){
            el.isComplete = !el.isComplete;
        }
    })
    e.target.parentNode.parentNode.classList.toggle('complete');  
}

