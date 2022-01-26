import logo from './logo.svg';
import './App.css';
import BuggyCounter from './Components/BuggyCounter';
import ErrorBoundary from './Components/ErrorBoundary';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <ErrorBoundary>
            <BuggyCounter/>
          </ErrorBoundary>
          <ErrorBoundary>
            <BuggyCounter/>
          </ErrorBoundary>
          
      </header>
    </div>
  );
}

export default App;
