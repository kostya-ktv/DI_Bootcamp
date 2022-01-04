let form = document.querySelector('form');
document.querySelector('#removeAllGifs').addEventListener('click', ()=>{
    document.querySelector('.container').innerHTML = '';
})

form.addEventListener('submit', fetchRequest);

function fetchRequest(e) {
    e.preventDefault();
    let request = new XMLHttpRequest();
    request.open('GET',`https://api.giphy.com/v1/gifs/search?q=${form.elements[0].value}&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&limit=50`);
    request.responseType = 'json';
    request.send();
    request.onload = () => { 
        appendGif(request.response.data[Math.floor(Math.random() * 50)].images.original.url);
    }
}

function appendGif(url) {
    let card = document.createElement('div');
    let deleteButton = document.createElement('button');
    let gif = document.createElement('img');
    gif.src = url;
    gif.style.width = '100px';
    deleteButton.innerText="delete";
    deleteButton.addEventListener('click', (e)=> {e.target.parentNode.remove()});
    card.append(gif, deleteButton)
    document.querySelector('.container').append(card);
}
