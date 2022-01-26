import React, { useState } from "react";
import Garage from "./Garage";

const Car = (props) => {
    const [color, setColor] = useState('yellow');

    return(
        <div>
            <header>
                Name: {props.carInfo.name}<br></br>
                Model: {props.carInfo.model}<br></br>
                Color: {color}<br></br>
                <Garage size="small"/>
            </header>
        </div>
    )
}

export default Car;