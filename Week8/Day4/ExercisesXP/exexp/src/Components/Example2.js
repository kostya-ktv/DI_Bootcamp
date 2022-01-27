import React from "react"
import data from "../cv.json"

export const Example2 = props =>{ 
    let {Experiences: exp} = data;
    return(
        <div>
            <h1>Example2</h1>
            {exp.map((el, index) => {
                return (
                    <div key={index}>
                    <img src={el.logo}></img><br></br>
                    <p>{el.companyName}</p>
                    <p>{el.roles[0].title}</p>
                    <p>{el.roles[0].startDate}, {el.roles[0].location}</p>
                    <p>{el.roles[0].description}</p>
                    </div>
                    
                    
                )
            })}
        </div>
    )
}