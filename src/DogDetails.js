import React from "react";
import {useParams} from "react-router-dom";
import "./DogDetails.css";

const DogDetails = ({dogs}) => {
    const {name} = useParams();
    const dog = dogs.filter(d => d.name === name)[0];
    return (
        <div className="DogDetails">
            <h1>{dog.name}</h1>
            <h3>{dog.age}</h3>
            <img src={dog.src} alt="dog"></img>
            <h3>Some fun facts about {dog.name}!</h3>
            <ul>
                {dog.facts.map(f => <li>{f}</li>)}
            </ul>
        </div>
    )
};

export default DogDetails;