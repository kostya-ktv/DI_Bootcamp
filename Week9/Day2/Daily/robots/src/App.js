import logo from './logo.svg';
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
          <CardList/>
        </header>
      </div>
    )
  }
  
}
const mapDispatchToProps = dispatch => {
  return {
    getAllRobots: () => dispatch(getRobots())
  }
}
export default connect(null, mapDispatchToProps)(App);
