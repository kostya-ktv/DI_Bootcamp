import React from "react";
const WithJsx = props => {
    const myelement = <h1>I Love JSX!</h1>;
    const sum = 5 + 5
    return(
        <div>
            {myelement}
            "React is {sum} times better with JSX"
        </div>
        
        )
}

export default WithJsx;