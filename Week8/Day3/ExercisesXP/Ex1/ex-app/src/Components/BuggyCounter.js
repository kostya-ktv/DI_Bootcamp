import React from "react";

class BuggyCounter extends React.Component{
    constructor(){
        super();
        this.state = {
            counter : 0
        }
    }
    componentDidMount(){
        
    }
    render(){
        if(this.state.counter === 5) throw new Error('noooooo')
        
        return(
            <div>
                {this.state.counter}
            <br></br><button onClick={() => {
                this.setState({counter: this.state.counter + 1})
            }}>Increment</button>
            </div>
        )
        
    }
}

export default BuggyCounter;