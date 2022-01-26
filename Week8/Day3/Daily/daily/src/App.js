
import { useState } from 'react';
import './App.css';
import { FormComponent } from './FormComponent';

function App() {
  const [state, setState] = useState({});
  const handleGetInfo = (e) => {
    setState({...e});
  }
  return (
    <div className="App">
      {Object.entries(state).toString()}
      <header className="App-header">
        <FormComponent getinfo={(e)=>{handleGetInfo(e)}}/>
      </header>
    </div>
  );
}

export default App;
