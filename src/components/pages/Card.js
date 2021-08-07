import React from 'react';

// TODO: Modify this function so that it accepts props from the parent component
export default function Card(props) {
    const cardStyle = {
        width: '18rem',
    };

    // Helper function that generates a random width for our placeholder images
    const randomWidth = () => {
        const number = Math.random() * (300 - 200) + 200;
        return number.toString().split('.')[0];
    };

    // TODO: Update the return statement to display the data we received as props
    return (
        <div>
            <div className="card">

                <div className="card-body">
                   
                    <h2 className="card-title">{props.name}</h2>
                    <div className="card-image">{props.image}</div>
                    <p className="card-text">{props.description}</p>
                </div>
            </div>
        </div>

    );
}