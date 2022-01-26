import React from "react";

class Phone extends React.Component{
    constructor(){
        super();
        this.state = {
            brand: "Samsung",
            model: "Galaxy S20",
            color: "black",
            year: 2020
        };
    }
    changeColor(){
        this.setState({...this.state, color: 'blue'})
    }
    componentDidMount(){

    }
    render(){
     
        return(
            <div>
                {
                    Object.entries(this.state).map(e => {
                        return <p>{`${e[0]} : ${e[1]}`}</p>
                    })
                } 
                <button onClick={(e)=>{this.changeColor()}}>Change color</button>
            </div>
                    
        )
    }    
}

export default Phone;