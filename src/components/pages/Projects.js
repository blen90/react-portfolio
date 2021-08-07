import React from 'react';
import Card from './Card';
import '../pages/style.css';


const data = [
  {
    name: 'Project 1 - Cocktails-Cuisine-Craft-Beers',
    image: <img src="assets/images/landing_page.jpg" alt="landing page" class="landing_page"></img>,
    description: 'This app was created for the user to search for cocktail recipes to make at home, restaurants and breweries close by.',
    id: 1,
  },
  {
    name: 'Project 2 - Event Organizer ',
    description: 'This app was created so the user can lookup events close by, create and save events',
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
        <Card name={projects.name} image={projects.image} description={projects.description}  key={projects.id} />
      ))}
    </div>
  );
}