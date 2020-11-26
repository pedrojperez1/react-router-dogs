import React from "react";
import { Link } from "react-router-dom";
import "./DogNav.css";

const DogNav = ({dogNames}) => {
    return (
        <div className="DogNav" >
            {dogNames.map(name => (<Link to={`/dogs/${name}`}>{name}</Link>))}
        </div>
    )
};

export default DogNav;