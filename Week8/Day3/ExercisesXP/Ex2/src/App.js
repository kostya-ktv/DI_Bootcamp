import './App.css';
import Car from './Components/Car';
import Events from './Components/Events';
import Phone from './Components/Phone';
import Color from './Components/Color';
import React from 'react';
import Child from './Components/Child';
import ErrorBoundary from './Components/ErrorBoundary';



const carinfo = {name: "Ford", model: "Mustang"};

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      show: true
    }
  }
 
  render(){
    
    return (
      <div className="App">
        <Car carInfo = {carinfo}/>
        <Events/>
        <Phone/>
        <Color/>
        <ErrorBoundary>
          {this.state.show && <Child/>}
        </ErrorBoundary>
        <button onClick={()=>{this.setState({show: false})}}>REMOVE CHILD COMPONENT</button>
        
      </div>
    );
  }
  
}

export default App;
