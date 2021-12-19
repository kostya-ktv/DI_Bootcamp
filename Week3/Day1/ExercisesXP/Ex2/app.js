let body = document.querySelector("body");
body.querySelector("ul").lastElementChild.innerText = "Richard"

body.querySelectorAll("ul").forEach(el => {
    el.firstElementChild.innerText = "Kostya";
    let li = document.createElement('li')
    li.textContent = "Hey students"
    el.append(li)
})
document.querySelectorAll('li').forEach(el => el.innerText == "Sarah" && el.remove())


