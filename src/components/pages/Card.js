import React from 'react';

// TODO: Modify this function so that it accepts props from the parent component
export default function Card(props) {

    // TODO: Update the return statement to display the data we received as props
    return (
        <div className="container text-center">
            <div className="row col-3-md col-3-sm">
                <div className="card justify-content-center">
                    <div className="card-body ">
                    <h2 className="card-title">{props.name}</h2>
                   <div className="card-image">{props.image}</div>
                   <p className="card-text">{props.description}</p>
                   <p className="card-repo">{props.repo}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}