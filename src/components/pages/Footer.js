import React from 'react';
import '../pages/style.css';

export default function Footer() {
    return (
        <div className="container text-center">
            <div className="footer text-center">
                <a href="https://www.github.com/blen90" target="_blank"><img src="../assets/images/github.jpg" alt="github" className="github-logo"></img></a>
                <a href="https://www.linkedin.com/in/blenda-orellana" target="_blank"><img src="../assets/images/linkedin.jpg" alt="linkedin" className="linkedin-logo"></img></a>
            </div>
        </div>

    );
}