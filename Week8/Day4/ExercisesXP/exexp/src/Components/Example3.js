import React from "react"
import file from "../cv.json"
export const Example3 = props =>{ 
let {Skills: skills} = file;
    return(
        <div>
            {skills.map((el, index)=> {
                return (
                    <div key={index}>
                        <p><strong>{el.Area}</strong></p>
                        {el.SkillSet.map(el => {
                            return <ul><li>{el.Name}</li></ul>
                        })}
                    </div>
                )
            })}
        </div>
    )
}