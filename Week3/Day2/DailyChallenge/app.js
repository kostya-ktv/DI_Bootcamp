let noun = document.querySelector('#noun')
let adjective = document.querySelector('#adjective')
let names = document.querySelector('#person')
let verb = document.querySelector('#verb')
let place = document.querySelector('#place')
let button = document.querySelector('#lib-button')
let shuffle = document.querySelector('#shuffle')
let values = []
let inputs = [];

document.querySelectorAll('input').forEach(e => {inputs.push(e);})

button.addEventListener('click', generate)  

shuffle.addEventListener('click', shuffleStory)


function shuffleStory(){
    let p = document.createElement('p');
    p.innerText = generatedStory(...values);
    document.querySelector('#story').lastElementChild != null ? document.querySelector('#story').lastElementChild.remove() : ""
    document.querySelector('#story').append(p)
}

function generate(){
    if(inputs.every(e => e.value != '')){
        let p = document.createElement('p')
        p.innerText = generatedStory(noun.value, adjective.value, names.value, verb.value, place.value);
        document.querySelector('#story').lastElementChild != null ? document.querySelector('#story').lastElementChild.remove() : ""
        document.querySelector('#story').append(p)
        document.querySelectorAll('input').forEach(e => {
            values.push(e.value)
            e.value = ""})
        }else {
            alert('fill inputs')
        }
}
function generatedStory(someNone, someAdjective, someName, someVerb, somePlace){
    let stories = [
        `Hi iam ${someName}.When I go to ${somePlace}, I eat my ${someNone}. Suddenly I saw a ${someAdjective} car and I decided to ${someVerb} it`,
        `Yesterday I fried a ${someAdjective} ${someNone}. I went to ${someVerb} my hands in the ${somePlace}. Thanks for all ${someName}`
    ]
    return stories[Math.floor(Math.random() * 2)]

}