import React from "react";


const Card = props => {
   return(
      <div style={{fontSize: 13, border: '2px solid white', backgroundColor: 'tomato', margin: 5}}>
         <img src={`https://robohash.org/${props.robot.id}.png?set=set4`} style={{width: 200}}/>
         <p>{props.robot.name}</p>
         <p>{props.robot.email}</p>
      </div>
   )
}

export default Card;