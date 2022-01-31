import './App.css';
import CounterComponent from './components/Counter-component';
import MoviesComponent from './components/Movies-component';



function App() {
  return (
    <div className="App">
      <header className="App-header">
       <CounterComponent/>
       <MoviesComponent/>
      </header>
    </div>
  );
}

export default App;
