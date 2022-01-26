import React, { useState } from "react";

const Events = () => {
  const [inputValue, setInputValue] = useState("");
  const [isToggleOn, setIsToggle] = useState(true);
  const button = document.querySelector('#toggle')

  const clickMe = () => {
    alert("I was clicked");
  };

  const handleChange = (e) => {
    if (e.code === "Enter" || e.code === "NumpadEnter") alert(e.target.value);
  };

  const handleIsToggle = (e) => {
    setIsToggle(!isToggleOn);
    button.innerHTML = isToggleOn.toString();
  };

  return (
    <div>
      <input
        type="text"
        onKeyPress={(e) => {
          handleChange(e);
        }}
      />
      <p>{inputValue}</p>
      <button onClick={clickMe}>Click</button><br></br>
      <button id="toggle"
        onClick={(e) => {
          handleIsToggle(e);
        }}>
        On
      </button>
    </div>
  );
};

export default Events;
