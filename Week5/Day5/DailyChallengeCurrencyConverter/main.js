let currentSelect = document.querySelector('#currentSelect'),
    wishSelect = document.querySelector('#wishSelect'),
    form = document.querySelector('form'),
    submitButton = document.querySelector('#submitButton'),
    showSpan = document.querySelector('#showSpan'),
    amountInput = document.querySelector('#amountInput');

form.addEventListener('submit', convert)
getAllCurrencies();



function convert(e) {
    e.preventDefault();
    fetch(`https://v6.exchangerate-api.com/v6/24ec5c963a13d4ad8b46c8d2/pair/${currentSelect.value}/${wishSelect.value}/${amountInput.value}`)
    .then(response => response.json())
    .then(data => showSpan.textContent = data.conversion_result)
    .catch(error => console.log(error))
}
function getAllCurrencies() {  
    fetch('http://api.currencylayer.com/list?access_key=29ad13642fc07a180828b26c0b256bca')
    .then(response => response.json())
    .then(data => {
       Object.entries(data.currencies).forEach(el => {

           let option = document.createElement('option');
           option.value = el[0];
           option.value == 'USD' ? option.selected = true : '';
           option.text = `${el[0]} : ${el[1]}`;

           let option2 = document.createElement('option');
           option2.value = el[0];
           option2.value == 'ILS' ? option2.selected = true : '';
           option2.text = `${el[0]} : ${el[1]}`;

           wishSelect.append(option2);
           currentSelect.append(option);
        })    
    })
    .catch(error => console.log(error + " :oops"))
}
