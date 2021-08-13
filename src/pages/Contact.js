import React from 'react';
import emailjs from 'emailjs-com';
import './style.css';
// import { checkPassword, validateEmail } from '../utils/helpers';

// import './ContactUs.css';

export default function Contact() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_mxb2e23', 'template_twwgk7d', e.target, 'user_j4vKKqMNY4xCOIUz7layV')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }

  return (
    <div className="form col-12-lg col-6-md col-3-sm text-center">
      <div className="form-container">
      <h2 className="title"> Contact Me! </h2>
      <br></br>
    <form className="contact-form col-8 pt-2 mx-auto" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
      <label>Name</label>
      <input type="text" className="form-name" name="user_name" placeholder="name" />
      <label>Email</label>
      <input type="text" className="form-email" name="user_email" placeholder="email"/>
      <label>Message</label>
      <textarea type="text" className="form-message" name="message" placeholder="message"/>
      <input className="submit-button btn-primary" type="submit" value="Send" />
    </form>
    </div>
    </div>
  );
}

