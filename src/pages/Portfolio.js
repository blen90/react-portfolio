import React from 'react';
import Card from '../components/Card';
import './style.css';
import Cocktails from '../assets/images/landing_page.jpg';
import Events from '../assets/images/dashboard-project-2.jpg';
import Password from '../assets/images/password-generated.jpg';
import Work from '../assets/images/work.jpg';
import Weather from '../assets/images/weather-dashboard.jpg';
import Notes from '../assets/images/notes.jpg';
import Workout from '../assets/images/workout.jpg';



const data = [
  {
    name: 'Project 1 - Cocktails-Cuisine-Craft-Beers',
    image: <img src={Cocktails} alt="landing page" className="landing_page"></img>,
    description: 'This app was created for the user to search for cocktail recipes to make at home, restaurants and breweries close by.',
    repository: <a href="https://www.github.com/blen90/Cocktails-Cuisine-Craft-Beers.git" target="_blank" rel="noreferrer">Link to repository</a>,
    deployed: <a href="https://jacobbeckfeld.github.io/Cocktails-Cuisine-Craft-Beers/" target="_blank" rel="noreferrer">Link to deployed app</a>,
    id: 1,
  },
  
    {
      name: 'Project 2 - Event Organizer',
      image: <img src={Events} alt="landing page" className="dashboard"></img>,
      description: 'This app was created so the user can lookup events close by, create and save events',
      repository: <a href="https://www.github.com/neilburt/group-project-2" target="_blank" rel="noreferrer">Link to repository</a>,
      deployed: <a href="https://gentle-reaches-60799.herokuapp.com/" target="_blank" rel="noreferrer">Link to deployed app</a>,
      id: 2,
    },

  {
    name: 'Password Generator',
    image: <img src={Password} alt="password-generator" className="password-generator"></img>,
    description: 'This app creates a random password with the choices the user picks',
    repository: <a href="https://www.github.com/blen90/hw3-code-generator.git" target="_blank" rel="noreferrer">Link to repository</a>,
    deployed: <a href="https://blen90.github.io/hw3-code-generator/" target="_blank" rel="noreferrer">Link to deployed app</a>,
    id: 3,
  },
  {
    name: 'Work Day Scheduler',
    image: <img src={Work} alt="work-scheduler" className="work-scheduler"></img>,
    description: 'This app allows the user to have a Work Day Scheduler and it saves tasks and changes color depending on what time it is',
    repository: <a href="https://github.com/blen90/hw5-workday-calendar.git" target="_blank" rel="noreferrer">Link to repository</a>,
    deployed: <a href="https://blen90.github.io/hw5-workday-calendar/" target="_blank" rel="noreferrer">Link to deployed app</a>,
    id: 4,
  },
  {
    name: 'Weather Dashboard',
    image: <img src={Weather} alt="weather-dashboard" className="weather-dashboard"></img>,
    description: 'This app allows the user to get the current weather in the city they want to checkout and gives the five day Forecast',
    repository: <a href="https://github.com/blen90/hw6-weather-dashboard.git" target="_blank" rel="noreferrer">Link to repository</a>,
    deployed: <a href="https://blen90.github.io/hw6-weather-dashboard/" target="_blank" rel="noreferrer">Link to deployed app</a>,
    id: 5,
  },
  {
    name: 'Note Taker',
    image: <img src={Notes} alt="note-taker" className="note-taker"></img>,
    description: 'This app allows the user to create notes, saved them and delete them.',
    repository: <a href="https://github.com/blen90/hw11-note-taker.git" target="_blank" rel="noreferrer">Link to repository</a>,
    deployed: <a href="https://atitlan-note-taker.herokuapp.com/" target="_blank" rel="noreferrer">Link to deployed app</a>,
    id: 6,
  },
  {
    name: 'Workout Tracker',
    image: <img src={Workout} alt="workout-tracker" className="workout-tracker"></img>,
    description: 'This app allows the user to create workout routines and keep track of them. It also keeps track of the past 7 days.',
    repository: <a href="https://github.com/blen90/hw18-workout-tracker.git" target="_blank" rel="noreferrer">Link to repository</a>,
    deployed: <a href="https://quiet-crag-39562.herokuapp.com/?id=610b4ad83d6a8d001502b06a" target="_blank" rel="noreferrer">Link to deployed app</a>,
    id: 7,
  },
];

export default function Display() {
  return (
    <div className="projects">
      {data.map((projects) => (
        <Card name={projects.name} image={projects.image} description={projects.description}  repository={projects.repository} deployed={projects.deployed}  key={projects.id} />
      ))}
    </div>
  );
}