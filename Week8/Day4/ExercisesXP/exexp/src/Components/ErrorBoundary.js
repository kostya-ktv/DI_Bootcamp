import React, { useState } from "react";

export class ErrorBoundary extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            hasError: false
        }
    }
    componentDidCatch(){
        this.setState({hasError: true})
    }
    
    render(){
        if(this.state.hasError){
            return <h1>We have an error</h1>
        }else{
            return this.props.children
        }
    }
    
    
}