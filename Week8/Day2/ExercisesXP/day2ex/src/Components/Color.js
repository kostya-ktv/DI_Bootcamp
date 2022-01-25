import React from "react";

class Color extends React.Component{
    constructor(){
        super()
        this.state = {
            favoriteColor : 'red'
        };

    }
    changeColor(){
        this.setState({...this.state, favoriteColor : 'blue'})
    }
    componentDidMount(){

        setTimeout(()=>{
            this.setState({...this.state, favoriteColor : 'yellow'})

        }, 2000)
    }

    render(){

        return(
            <div>
                <header>My favorite color is {this.state.favoriteColor}</header>
                <button onClick={this.changeColor.bind(this)}>Change favorite color</button>
            </div>
        )
    }
}

export default Color;