import React from 'react';
import "./Card.css";

function Card(props) {
    return (
        <div className="card">
            <img src={props.src}
            alt="Not found" />
            <div className="card__desc">
                <h2>{props.title}</h2>
                <h4>{props.description}</h4>
                <h3>{props.price}</h3>
            </div>
        </div>
    )
}

export default Card
