import './App.css';
import data from './quotes';
import React, { useState } from 'react';

function App() {
  const [currentQuote, setQuote] = useState('');
  let quotes = data;

  const getRandomNumber = (num) => {
    return Math.floor(Math.random() * num)
  }
  const generateQuote = () => {
    let num = getRandomNumber(quotes.quotes.length - 1);
    let quote = quotes.quotes[num];
    quotes = quotes.quotes.splice(num, 1); 
    setQuote({
      author: quote.author,
      quote: quote.quote
    })
    document.querySelector('.App-header').style.backgroundColor = getRandomColor();
    document.querySelector('.container').style.backgroundColor = getRandomColor();
    document.querySelector('button').style.backgroundColor = getRandomColor();
  }
  const getRandomColor = () => {
    return `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`
  }
  return (
    <div className="App">
      <header className="App-header">
          <div className='container'>
            <p>{currentQuote.author}</p>
            <p>{currentQuote.quote}</p>
            <button onClick={generateQuote}>New quote</button>
          </div>
      </header>
    </div>
  );
}

export default App;
