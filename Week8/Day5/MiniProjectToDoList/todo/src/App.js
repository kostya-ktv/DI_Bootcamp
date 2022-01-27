
import { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  const inputDataHadnler = (e) => {
    if(e.code === 'Enter' || e.code === 'NumpadEnter' && e.target.value != ''){
      setTasks([...tasks, e.target.value])
      e.target.value = '';
    } 
  }
  const deleteTask = (e) => {
    e.target.remove();
    let tmp = [...tasks];
    tmp.splice(tmp.indexOf(e.target.innerText), 1);
    setTasks(tmp);
  }
  return (
    <div className="App">
      <header className="App-header">
          <div className='container'>
            <div className='head'> TODO LIST</div>
            <label>Add a new todo</label><br></br>
            <input type='text'onKeyPress={(e)=>{inputDataHadnler(e)}}/>
            <div className='tasks'>
              {tasks.map(el => {
                return(
                  <div className='task'>
                    <p onClick={(e)=>{deleteTask(e)}}>{el}</p>
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
