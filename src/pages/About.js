import React from 'react';
import './style.css';


export default function About() {
  return (
    <div className="container text-center justify-content-center col-6-md col-3-sm">
          <div className="card-body ">
            <h1>About Me</h1>
            <img src="assets/images/blenda1.jpg" alt="blenda" className="blenda"></img>
            <p>
              Hello! My name is Blenda, I'm originially from Guatemala, but I'm currently living in Austin, Texas. <br>
              </br>
              I have been learning how to code for the past 11 weeks at the University of Minnesota Bootcamp <br>
              </br>
              I'm very excited to keep learning and for you to see what I've been able to come up with so far.
            </p>
          </div>
        </div>

  );

}
