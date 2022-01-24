import React from "react";

const UserFavoriteColors = (props) => {
  return (
    <ul>
      {props.animals.map((el) => {
        return <li>{el}</li>;
      })}
    </ul>
  );
};
export default UserFavoriteColors;
