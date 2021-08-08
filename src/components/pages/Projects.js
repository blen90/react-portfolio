import React from 'react';
import Card from './Card';
import '../pages/style.css';


const data = [
  {
    name: 'Project 1 - Cocktails-Cuisine-Craft-Beers',
    image: <img src="assets/images/landing_page.jpg" alt="landing page" className="landing_page"></img>,
    description: 'This app was created for the user to search for cocktail recipes to make at home, restaurants and breweries close by.',
    repo: <a className="btn btn-primary" href="https://github.com/blen90/Cocktails-Cuisine-Craft-Beers.git" target="_blank">Link to repo</a>,
    id: 1,
  },
  {
    name: 'Project 2 - Event Organizer ',
    description: 'This app was created so the user can lookup events close by, create and save events',
    repo: <a className="btn btn-primary" href="https://github.com/neilburt/group-project-2" target="_blank">Link to repo</a>,
    id: 2,
  },
  {
    name: 'Walter',
    description: 'Friend for life',
    size: 'Medium',
    id: 3,
  },
];

export default function Display() {
  return (
    <div>
      {data.map((projects) => (
        <Card name={projects.name} image={projects.image} description={projects.description}  repo={projects.repo} key={projects.id} />
      ))}
    </div>
  );
}