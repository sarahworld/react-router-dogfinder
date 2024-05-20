import React from "react";
import './Nav.css';

const Nav = ({dogs}) => {
    return(
        <div>
             {dogs.map((item, index) => (
                <ul>
                    <li key={index}>{item.name}</li>
                </ul>
            ))}
        </div>
        
    )
}

export default Nav;