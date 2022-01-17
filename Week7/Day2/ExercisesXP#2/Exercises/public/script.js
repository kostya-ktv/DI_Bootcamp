fetch('http://localhost:3000/data').then(data => data.json()).then(data => {
    console.log(data);
    document.body.append(JSON.stringify(data))
})