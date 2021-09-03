import React from 'react';
import '../pages/style.css';

export default function Card(props) {

    return (
        <div className="container text-center justify-content-center col-6-md col-3-sm">
            <div className="card-body">
                <h2 className="card-title">{props.name}</h2>
                <div className="card-image">{props.image}</div>
                <p className="card-text">{props.description}</p>  
                <div className="card-repo">{props.repository}</div>
                <div className="card-deployed">{props.deployed}</div>
            </div>
        </div>
    );
}
