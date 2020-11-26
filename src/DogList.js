import React from "react";
import Dog from "./Dog";

const DogList = ({dogs}) => {
    return (
        <div className="DogList">
            {dogs.map(dog => (
                <Dog name={dog.name} age={dog.age} src={dog.src} facts={dog.facts}/>
            ))}
        </div>
    )
};

export default DogList;