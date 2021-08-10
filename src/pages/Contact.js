import React from 'react';
import './style.css';



export default function Contact() {
  return (
    <div className="container col-6-md col-3-sm">
        <div className="row">
          <form>
            <h2 className="title"> Contact Me! </h2>
            <div className="form-group">
              <label>Your name</label>
              <input type="text" className="form-name" placeholder="Blenda"></input>
            </div>
            <div className="form-group">
              <label>Your Last name</label>
              <input type="text" className="form-lastName" placeholder="Orellana"></input>
            </div>
            <div className="form-group">
              <label>Your Message</label>
              <input type="text" className="form-message" placeholder="message"></input>
            </div>
            <div className="form-group">
              <button className="submit-button btn-primary">Submit</button>
            </div>
          </form>
      </div>
    </div>
  );
}
