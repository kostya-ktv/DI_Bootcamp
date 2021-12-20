// "When I go to school, I eat my (noun), then I brushed my (landmark). Finally I grabbed my (barbershop item) and took the (fruit)
// "Every day, I feed my cat (name of person) some (name of a cereal). He likes it so much that he (past tense verb) all over the (around the house).
let noun = document.querySelector('#noun')
let adjective = document.querySelector('#adjective')
let names = document.querySelector('#person')
let verb = document.querySelector('#verb')
let place = document.querySelector('#place')
let button = document.querySelector('#lib-button')
let shuffle = document.querySelector('#shuffle')
let values = []
button.addEventListener('click', (e)=>{
    e.preventDefault();
    if(document.querySelectorAll('input').every(e => e.value)) console.log('true')
    let p = document.createElement('p')
    p.innerText = generatedStory(noun.value, adjective.value, names.value, verb.value, place.value);
    document.querySelector('#story').lastElementChild != null ? document.querySelector('#story').lastElementChild.remove() : ""
    document.querySelector('#story').append(p)
    document.querySelectorAll('input').forEach(e => {
        values.push(e.value)
        e.value = ""})
})

shuffle.addEventListener('click', ()=>{
    let p = document.createElement('p');
    p.innerText = generatedStory(...values);
    document.querySelector('#story').lastElementChild != null ? document.querySelector('#story').lastElementChild.remove() : ""
    document.querySelector('#story').append(p)
})


function generatedStory(someNone, someAdjective, someName, someVerb, somePlace){
    let stories = [
        `When I go to ${somePlace}, I eat my ${someNone}. Suddenly I saw a ${someAdjective} car and I decided to ${someVerb} it`,
        `Yesterday I fried a ${someAdjective} ${someNone}. I went to ${someVerb} my hands in the ${somePlace}.`
    ]
    return stories[Math.floor(Math.random() * 2)]

}