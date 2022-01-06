let urls = [
    'https://jsonplaceholder.typicode.com/todos/1',
    'https://jsonplaceholder.typicode.com/todos/2',
    'https://jsonplaceholder.typicode.com/todos/3',
    'https://jsonplaceholder.typicode.com/todos/4',
];
Promise.all(urls.map(el => fetch(el)
        .then(data => data.json())
    ))
    .then(result => console.log(result))
    .catch(error => console.log(error));
