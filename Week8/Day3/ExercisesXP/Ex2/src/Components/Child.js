import React from "react";


class Child extends React.Component{
    constructor(){
        super();
        this.state = {
            show: true
        }
    }

    componentWillUnmount(){
        alert('unmount')
    }

    render(){

        if(this.state.show){
            return(
                <div>
                    <div>CHILD COMPONENT</div>
                    <button onClick={()=>{this.setState({show: false})}}>DELETE</button>
                    
                </div>
                
            )
        }
        
    }
}

export default Child;