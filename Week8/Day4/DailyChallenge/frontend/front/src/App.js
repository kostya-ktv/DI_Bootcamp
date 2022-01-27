import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "",
    };
    this.submitHandler = this.submitHandler.bind(this)
  }
  componentDidMount() {
    fetch('http://localhost:5000/hello')
      .then(res => res.json())
      .then(res => console.log(res))
  }
  submitHandler(e) {
    let message = e.target[0].value;
    e.preventDefault();
    fetch(`http://localhost:5000/world`, {
      method: 'POST',
      headers: {'Content-type':'application/json'},
      body: JSON.stringify({message}),
    })
    .then(data => data.json())
    .then(res => this.setState({message: res}))
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <form onSubmit={this.submitHandler}>
            <input name="message" type="text" />
            <input name="submit" type="submit" />
          </form>
          {this.state.message && <p>I received your POST request. This is what you sent me: {this.state.message}</p>}
        </header>
      </div>
    );
  }
}

export default App;
