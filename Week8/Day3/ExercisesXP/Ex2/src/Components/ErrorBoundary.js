import React from "react";

class ErrorBoundary extends React.Component{
    constructor(){
        super();
        this.state = {
            error: null
        }
    }
    componentDidCatch(e){
        console.log(e);
        this.setState({error: 'NEW ERROR'})
    }
    render() {
        if (this.state.error) {
     
          return <h1>Something went wrong.</h1>;
        }
    
        return this.props.children; 
      }
}

export default ErrorBoundary;