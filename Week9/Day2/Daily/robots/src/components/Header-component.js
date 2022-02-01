import React from "react";
import { filterRobots } from "../store/actions/robot-actions";
import { connect } from "react-redux";

const Header = props => {
   
   return(
      <div style={{display: 'flex', alignItems: 'center'}}>
         <h1>ROBOHASH</h1>
         <input onChange={(e)=> props.changeHandler(e)}type='text' placeholder="search..." style={{margin: 20, width: 300}}/>
      </div>
   )
}


const mapDispatchToProps = (dispatch) => {
   return {
      changeHandler: (e) => dispatch(filterRobots(e.target.value))
   }
 }
export default connect(null, mapDispatchToProps)(Header);