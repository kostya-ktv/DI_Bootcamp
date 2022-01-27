import React from "react"
import data from "../cv.json"
export const Example1 = props =>{ 
    let {SocialMedias: medias} = data;
    return(
        <div>
            <h1>Example1</h1>
            {medias.map((el, index) => {
                 return <p key={index}>{el}</p>
            })}
        </div>
    )
}