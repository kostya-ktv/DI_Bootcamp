import React from "react";
import {connect} from 'react-redux'
import { incrementCounter, decrementCounter } from "../store/actions/counter-action";

const CounterComponent = props => { 
      return(
         <div>
            <button onClick={()=>props.increment(props.currentValue)}>+</button>
            <h2> COUNT: {props.currentValue}</h2>
            <button onClick={()=>props.decrement(props.currentValue)}>-</button>
         </div>
      )   
}
const mapStateToProps = (state) => {
   return {
      currentValue: state.counter.currentValue
   }  
}
const mapDispatchToProps = (dispatch) => {
   return {
      increment: (val)=> dispatch(incrementCounter(val)),
      decrement: (val)=> dispatch(decrementCounter(val))
   }
}
export default connect(mapStateToProps, mapDispatchToProps)(CounterComponent);
