import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [votes, setVotes] = useState({
    languages: [
      { name: "Php", votes: 0 },
      { name: "Python", votes: 0 },
      { name: "JavaSript", votes: 0 },
      { name: "Java", votes: 0 },
    ],
  });
  return (
    <div className="App">
      <header className="App-header">
        {votes.languages.map((el) => {
          return (
            <p>
              {el.name} : {el.votes} 
              <button onClick={() => {
                let tmp = {...votes};
                tmp.languages.find(elem => elem.name == el.name).votes += 1;
                setVotes(tmp);
              }}>+</button> 
              <button onClick={() => {
                let tmp = {...votes};
                tmp.languages.find(elem => elem.name == el.name).votes -= 1;
                setVotes(tmp);
              }}>-</button> 
              
            </p>
          );
        })}
      </header>
    </div>
  );
}

export default App;
