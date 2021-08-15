import './style.css';
import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'name') {
      setName(inputValue);
    } else if (inputType === 'email') {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  }
  const handleInputBlur = (e) => {
    if (!e.target.value.length) {
      setErrorMessage(`${e.target.name} is required`);
    } else {
      setErrorMessage('');
    }
  }
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email.');
      return;

    } else if (!name.length || !email.length || !message.length) {
      setErrorMessage('Please complete the required fields');
      return;
    }
    setName('');
    setEmail('');
    setMessage('');
  }
  return (
    <div className="form justify-content-center">
      <h2 className="title"> Contact me! </h2>

        <form className="contact-form">
          <input value={name} className="form-name"
            name="name"
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            type="text"
            placeholder="Name"
          />
          <input
            value={email}
            name="email"
            className="form-email"
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            type="email"
            placeholder="Email"
          />
          <input
            value={message}
            className="form-message"
            name="message"
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            type="textarea"
            placeholder="Message"
          />
          <button className="submit-button btn-primary" type="button" onClick={handleFormSubmit}>Submit</button>

        </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}

    </div>
  )
}

