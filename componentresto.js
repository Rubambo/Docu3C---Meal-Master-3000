import React from 'react';
import './componentresto.css';

function Rest(props) {
    return (
        <div className = 'bill-split'>
            <div>{props.distance}</div>
            <div className = 'bill-split__description'>
                <h2>{props.name}, {props.location}</h2>
                <div className = 'bill-split__price'>{props.timing}</div>
            </div>
        </div>
        );
}

export default Rest;