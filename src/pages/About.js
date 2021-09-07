import React from 'react';
import './style.css';

export default function About() {
  return (
    <div className="container text-center justify-content-center col-6-md col-3-sm">
      <div className="card-body ">
        <h1>About Me</h1>
        <img src={process.env.PUBLIC_URL + '/assets/images/blenda1.jpg'} alt="blenda" className="blenda"></img>
        <p>
          Hello! My name is Blenda, I'm originally from Guatemala, but I'm currently living in Austin, Texas.
          For fun I enjoy going on long walks and hikes with my two dogs, cooking all sorts of international foods, going to orchestra concerts, attending festivals or concerts, and travelling.
          <br></br>
          <br></br>
          I just received my certificate for Full Stack Web Development Certificate (Coding Boot Camp) from the University of Minnesota.
          This Bootcamp required an individual weekly effort ranging between 80-100+ hours in order to attend classes, complete real-world programming assignments, and collaborate on 3 group projects with other students.
          I have a Business and Finance background, I am bilingual in English and Spanish, and I have a newly discovered passion for coding.
          <br></br>
          <br></br>
          I'm very excited to keep extending my knowledge in coding and improving my coding skills!
        </p>
      </div>
    </div>
  );
}



