import React from 'react';

export default function Card(props) {

    return (
        <div className="container text-center">
            <div className="column col-6-md col-3-sm">
                <div className="card justify-content-center">
                    <div className="card-body ">
                        <h2 className="card-title">{props.name}</h2>
                        <div className="card-image">{props.image}</div>
                        <p className="card-text">{props.description}</p>
                        <div className="card-repo">{props.repository}</div>
                        <div className="card-deployed">{props.deployed}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}