let planets = [
    {
        name :'Mercury',
        moon: ['1','2','3']
    },
    {
        name :'Venus',
        moon: ['1','2','3']
    },
    {
        name :'Neptune',
        moon: ['1','2','3']
    },
    {
        name :'Uranus',
        moon: ['1','2','3']
    },
    {
        name :'Saturn',
        moon: ['1','2','3']
    },
    {
        name :'Jupiter',
        moon: ['1','2','3']
    },
    {
        name :'Mars',
        moon: ['1','2','3']
    },
    {
        name :'Earth',
        moon: ['1','2','3']
    }
]


for(let el of planets){
    let planet = document.createElement('div');
    planet.classList.add('planet');
    planet.innerHTML = el.name;
    planet.style.color = 'white'
    planet.style.backgroundColor = getRandomColor();
    document.querySelector('section').append(planet)

    el.moon.forEach(m => {
        let moon = document.createElement('div');
        moon.classList.add('moon');
        planet.append(moon);
    })
    document.querySelector("div[id=container] p[class=article]")
}

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let  i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

