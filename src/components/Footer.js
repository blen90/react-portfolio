import React from 'react';
import '../pages/style.css';

export default function Footer() {
    return (
        <div className="container text-center">
            <div className="footer text-center">
                <a href="https://www.github.com/blen90" target="_blank" rel="noreferrer"><img src="../assets/icons/github.jpg" alt="github" className="github-logo"></img></a>
                <a href="https://www.linkedin.com/in/blenda-orellana" target="_blank" rel="noreferrer"><img src="../assets/icons/linkedin.jpg" alt="linkedin" className="linkedin-logo"></img></a>
            </div>
        </div>

    );
}