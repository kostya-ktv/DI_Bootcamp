import React from "react";

class Color extends React.Component{
    constructor(){
        super()
        this.state = {
            favoriteColor : 'red',
            isUpdate: false
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
    shouldComponentUpdate(){return true}

    getSnapshotBeforeUpdate(){
        //?????
    }
    componentDidUpdate(){
        if(!this.state.isUpdate) this.setState({...this.state, isUpdate: true})
    }
   

    render(){
        return(       
            <div>         
                <header>My favorite color is {this.state.favoriteColor}</header>
                <button onClick={this.changeColor.bind(this)}>Change favorite color</button>   
                {this.state.isUpdate && <div> COLOR IS {this.state.favoriteColor} </div>}         
            </div>
        )
        
    }
}

export default Color;