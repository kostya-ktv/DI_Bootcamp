import React from "react";
import { connect } from "react-redux";
import { decrement, increment } from "../store/actions/digitCounter-actions";

const DigitCounter = props => {
   console.log(props);
   return(
      <div style={{border: '3px solid wheat', borderRadius: 20, padding: 20, margin: 10}}>
         <h1>Value: {props.digitReducer}</h1>
         <button onClick={props.inc}> + </button>
         <button onClick={props.dec}> - </button>
         <button onClick={() => props.digitReducer % 2 != 0 && props.inc()}> Increment if ODD</button>
         <button onClick={() => setTimeout(() => props.inc(), 1000)}> Increment async</button>
      </div>
   )
}
const mapStateToProps = state => {
   return {
      digitReducer: state.digitReducer.value
   }
}
const mapDispatchToProps = dispatch => {
   return {
      inc: () => dispatch(increment()),
      dec: () => dispatch(decrement()),

   }
}
export default connect(mapStateToProps, mapDispatchToProps)(DigitCounter);