import React from "react";

const Button: React.FC = () => {
    const handleClick = () => console.log("CLICK!");

    return <button onClick={handleClick}>CLICK!</button>   
}

export default Button;