import React from "react";
import Card from "./Card-component";
import { connect } from "react-redux";

const CardList = props => {
   
   return(
      <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly', width: 1200}}>
         {props.robots?.length > 0 && props.robots.map((el,index) => <Card key={index}robot={el}/>)}
      </div>
   )
}

const mapStateToProps = state => {
   return {
      robots: state.robot.filtered
   }
}
export default connect(mapStateToProps)(CardList);