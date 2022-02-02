import logo from './logo.svg';
import './App.css';
import AgeCounter from './components/ageCounter-component';
import DigitCounter from './components/digitCounter-component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AgeCounter/>
        <DigitCounter/>
      </header>
    </div>
  );
}

export default App;
