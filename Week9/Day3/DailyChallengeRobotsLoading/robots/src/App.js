
import './App.css';
import Header from './components/Header-component';
import CardList from './components/CardList-component';
import React from 'react';
import { connect } from 'react-redux';
import { getRobots } from './store/actions/robot-actions';
class App extends React.Component{
  constructor(props){
    super(props);
  }
componentDidMount(){
  this.props.getAllRobots();
}
  render(){
    
    return (
      <div className="App">
        <header className="App-header">      
          <Header/>
          <h1 style={{display: this.props.isLoading ? 'block': 'none'}}>Loading...</h1>
          <CardList style={{visibility: !this.props.isLoading ? 'visible': 'hidden'}}/>
        </header>
      </div>
    )
  }
  
}


const mapStateToProps = state => {
  return {
     isLoading: state.robot.isLoading
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getAllRobots: () => dispatch(getRobots())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
