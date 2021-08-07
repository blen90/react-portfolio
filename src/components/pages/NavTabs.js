import React from 'react';
import '../pages/style.css';

function NavTabs({ currentPage, handlePageChange }) {
  return (

    
      <ul className="nav nav-tabs justify-content-end" >
        <li className="nav-item">
          <a
            href="#about"
            onClick={() => handlePageChange('About')}
            //  TODO: Add a comment explaining what this logic is doing

            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
          >
            About
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#Apps"
            onClick={() => handlePageChange('Apps')}
            //  TODO: Add a comment explaining what this logic is doing

            className={currentPage === 'Apps' ? 'nav-link active' : 'nav-link'}
          >
            Projects
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#contact"
            //  TODO: Add a comment explaining what this logic is doing

            onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </a>
        </li>
      </ul>

  );
}

export default NavTabs;
