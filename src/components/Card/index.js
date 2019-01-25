import React from "react";
import "./card.css";

function Card(props) {
    return (
<div 
// all that was object or this in App.js is now props
            style={{backgroundImage: `url(${props.image})`}}
            key={props.id}
            className="chi-card col-md-4" 
            // () => is to not run the on click when rendering the props but wait for onClicks
            onClick={() => props.handleClick(props.id)}
            >
            {props.name}
            </div>
    )
}

export default Card;