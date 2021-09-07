import React from 'react';
import './style.css';

export default function About() {
  return (
    <div className="container text-center justify-content-center col-6-md col-3-sm">
      <div className="card-body ">
        <h1>About Me</h1>
        <img src={process.env.PUBLIC_URL + '/assets/images/blenda1.jpg'} alt="blenda" className="blenda"></img>
        <p>Hello! My name is Blenda, I'm originially from Guatemala, but I'm currently living in Austin, Texas.</p>
        <p> I enjoy going on long walks and hikes with my two dogs, cooking all sorts of international foods and travelling.</p>
        <p>I just received my certificate for Full Stack Web Development Certificate (Coding Boot Camp) from the University of Minnesota. This was an intensive 12-week accredited Bootcamp with new course material introduced every 2 or 3 days. </p>
        <p>This Bootcamp required an individual weekly effort ranging between 80-100+ hours in order to attend classes, complete real-world programming assignments, and collaborate on 3 small group projects with other students who attended the Bootcamp.</p>
        <p> I have a Business and Finance background, I am bilingual in English and Spanish, and a new discovered passion is coding</p>
        <p>I'm very excited to extend my knowledge in coding! </p>
      </div>
    </div>
  );

}



