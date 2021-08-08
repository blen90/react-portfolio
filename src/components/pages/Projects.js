import React from 'react';
import Card from './Card';
import '../pages/style.css';


const data = [
  {
    name: 'Project 1 - Cocktails-Cuisine-Craft-Beers',
    image: <img src="assets/images/landing_page.jpg" alt="landing page" className="landing_page"></img>,
    description: 'This app was created for the user to search for cocktail recipes to make at home, restaurants and breweries close by.',
    repository: <a className="btn btn-primary" href="https://github.com/blen90/Cocktails-Cuisine-Craft-Beers.git" target="_blank">Link to repository</a>,
    deployed: <a className="btn btn-primary" href="https://jacobbeckfeld.github.io/Cocktails-Cuisine-Craft-Beers/" target="_blank">Link to deployed app</a>,
    id: 1,
  },
  {
    name: 'Project 2 - Event Organizer ',
    image: <img src="assets/images/dashboard-project-2.jpg" alt="landing page" className="dashboard"></img>,
    description: 'This app was created so the user can lookup events close by, create and save events',
    repository: <a className="btn btn-primary" href="https://github.com/neilburt/group-project-2" target="_blank">Link to repo</a>,
    deployed: <a className="btn btn-primary" href="https://gentle-reaches-60799.herokuapp.com/" target="_blank">Link to deployed app</a>,
    id: 2,
  },
];

export default function Display() {
  return (
    <div>
      {data.map((projects) => (
        <Card name={projects.name} image={projects.image} description={projects.description}  repository={projects.repository} deployed={projects.deployed}  key={projects.id} />
      ))}
    </div>
  );
}