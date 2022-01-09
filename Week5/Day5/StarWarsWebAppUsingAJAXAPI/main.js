let detailDiv = document.querySelector('.details'),
    findPerson = document.querySelector('#people'),
    findPlanet = document.querySelector('#planets'),
    findShip = document.querySelector('#starships'),
    modalWindow = document.querySelector('.modalWindow'),
    nameH1 = document.querySelector('h1'),
    descriptionH3 = document.querySelector('h3'),
    descriptionH4 = document.querySelector('h4'),
    endPoint = '';


document.querySelectorAll('.findButton').forEach(el => el.addEventListener('click', getInfo));


function getInfo(e) {
    modalWindow.style.display = 'block';
    endPoint = e.target.id;
    sendRequest(endPoint)
}
function sendRequest(point) { 
    
    fetch(`https://www.swapi.tech/api/${point}/${randomNumber(30, 1)}`)
        .then((response) => {
            if (response.status >= 200 && response.status <= 299) {
            return response.json();
            } else {
            throw Error("666");
            }
        })
        .then(response => {
            appendData(response.result);
            modalWindow.style.display = 'none';
        })
        .catch(error=> sendRequest(point))
    
}

function randomNumber(min, max) {
    return Math.ceil(Math.random()*(max - min) + min)
}

function appendData(dataObject) {
    let props;
    nameH1.innerText = dataObject.properties.name;
    descriptionH3.innerText = dataObject.description;   
    if(endPoint == 'people'){
        let {birth_year, gender, height, mass, skin_color} = dataObject.properties;
        props = `<br><p>Birth year : ${birth_year}</p>
                     <br><p>Gender : ${gender}</p>
                     <br><p>Mass: ${mass}</p>
                     <br><p>Height : ${height}</p>
                     <br><p>Skin color : ${skin_color}`;       
    }
    if(endPoint == 'planets'){
        let {climate, diameter, gravity, population, terrain} = dataObject.properties;
        props = `<br><p>Climate : ${climate}</p>
                     <br><p>Diameter: ${diameter}</p>
                     <br><p>Gravity : ${gravity}</p>
                     <br><p>Population : ${population}</p>
                     <br><p>Terrain : ${terrain}`;       
    }
    if(endPoint == 'starships'){
        let {model, starship_class, manufacturer, max_atmosphering_speed, crew} = dataObject.properties;
        props = `<br><p>Model : ${model}</p>
                     <br><p>Starship class: ${starship_class}</p>
                     <br><p>Manufacturer : ${manufacturer}</p>
                     <br><p>Max atmosphering speed : ${max_atmosphering_speed}</p>
                     <br><p>Crew : ${crew}`;       
    }
    descriptionH4.innerHTML = props;
}
