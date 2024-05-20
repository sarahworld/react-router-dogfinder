import React from "react";
import { useParams } from "react-router";

const DogDetails = ({dogs}) => {
    const { name } = useParams();

    const dog = dogs.find(item => item.src === name)
    return (
        <div>
            {
                <ul>
                    <li>{dog.name}</li>
                    <li>{dog.age}</li>
                    <li>{dog.src}</li>
                    <li>{dog.facts}</li>
                </ul>
            
            }
            
        </div>
    )
}

export default DogDetails;