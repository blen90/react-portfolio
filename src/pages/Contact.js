import React from 'react';
import './style.css';



export default function Contact() {
  return (
    <div className="form col-12-lg col-6-md col-3-sm text-center">
      <div className="form-container"></div>
      <h2 className="title"> Contact Me! </h2>
      <br></br>
      <li className="input">
        <input type="text" className="form-name" placeholder="Your name"></input>
      </li>
      <br></br>
      <li className="input">
        <input type="text" className="form-lastName" placeholder="Your last name"></input>
      </li>
      <br></br>
      <li className="input">
        <input type="text" className="form-message" placeholder="Your message"></input>
      </li>
      <br></br>
      <button className="submit-button btn-primary">Submit</button>
    </div>
  );
}
