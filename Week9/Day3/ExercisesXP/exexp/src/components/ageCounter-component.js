import React from "react";
import { connect } from "react-redux";
import { ageDown, ageUp } from "../store/actions/ageCounter-actions";

const AgeCounter = props => {

   return(
      <div style={{border: '3px solid wheat', borderRadius: 20, padding: 20}}>
         <h3>AGE: {props.ageValue}</h3>
         <button onClick={props.ageUp}>AGE UP</button>
         <button onClick={props.ageDown}>AGE DOWN</button>
      </div>
   )
}
const mapStateToProps = state => {
   return {
      ageValue: state.ageReducer.age
   }
}
const mapDispatchToProps = dispatch => {
   return {
      ageUp: () => dispatch(ageUp()),
      ageDown: () => dispatch(ageDown())
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(AgeCounter);