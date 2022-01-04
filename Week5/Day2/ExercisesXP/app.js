let request = new XMLHttpRequest();
request.open('GET',`https://api.giphy.com/v1/gifs/search?q=sun&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&limit=10`);
request.responseType = 'json';
request.send();

request.onload = () => { 
        console.log(request.response.data);
    }

