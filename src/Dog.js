import React from "react";
import "./Dog.css";

const Dog = ({name, age, src, facts}) => {
    return (
        <div className="Dog">
            <h1>{name}</h1>
            <img src={src} alt="small dog"></img>
            <h4>Age: {age}</h4>
        </div>
    )
};

export default Dog; 