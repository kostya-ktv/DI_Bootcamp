import React from "react";
import file from "../data.json"

export const PostLists = props => {
let data = {...file};

    return(
        <div>
            <h1>Post Lists</h1>
            <h2>{data[0].title}</h2>
            <p>{data[0].content}</p>
            <h2>{data[1].title}</h2>
            <p>{data[1].content}</p>
        </div>
    )
}