import React from 'react';
import '../pages/style.css';
import Github from '../assets/icons/github.jpg';
import Linkedin from '../assets/icons/linkedin.jpg';

export default function Footer() {
    return (
        <div className="footer-container text-center">
                <a href="https://www.github.com/blen90" target="_blank" rel="noreferrer"><img src={Github} alt="github" className="github-logo"></img></a>
                <a href="https://www.linkedin.com/in/blenda-orellana" target="_blank" rel="noreferrer"><img src={Linkedin} alt="linkedin" className="linkedin-logo"></img></a>
        </div>

    );
}