import React from "react";
import './Exercise4.css';


const Exercise4  = (props) => {
    const style_header = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial"
      };
  return (
    <div style={style_header}>
        <h1>This is a Header</h1>
        <p className="para">This is a paragraph</p>
        <a>This is a link</a>
        <form>
            This is a Form
            <input type="text"></input>
            <input type="submit"></input>
        </form>
        <img src="logo192.png"></img>
        <ul>
            <li>Coffee</li>
            <li>Milk</li>
            <li>Tea</li>
        </ul>

    </div>
  );
};
export default Exercise4 ;
