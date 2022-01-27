
import './App.css';
import './style.css';
import data from './heroes.json'
import { useState } from 'react';

function App() {
  const [score, setScore] = useState([]);
  const [topScore, setTopScore] = useState(0);
  let {superheroes} = data;


  const shuffleArr = () => {
    return superheroes.sort(() => Math.random() - 0.5);
  }
  const selectCard = (e) => {
    if(score.includes(e)){
      topScore < score.length && setTopScore(score.length);
      setScore([])
    } else {
      setScore([...score, e])
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <div className='container'>
            <div className='header'>
              <div style={{display: 'flex', justifyContent: 'space-between', padding: '10px'}}>
              <p>Superheroes memory game</p>
              <p>Score: {score.length}   Top Score: {topScore}</p>
              </div>
              <div style={{borderTop: '5px solid grey', textAlign: 'left', padding: '10px'}}>
                Get points by clicking on a image, but dont click on any more than once!
              </div>
            </div>
            <div className='main'>
                {shuffleArr().map(el => {
                  return (
                    <div className='card' onClick={()=>{selectCard(el.id)}}>
                      <img src={el.image}/>
                      <p><strong>Name: </strong>{el.name}</p>
                      <p><strong>Occupetion</strong>{el.occupation}</p>
                    </div>
                  )
                })}
            </div>
        </div>
      </header>
    </div>
  );
}

export default App;
