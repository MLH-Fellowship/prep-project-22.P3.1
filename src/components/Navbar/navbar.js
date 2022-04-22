import { useState } from 'react';
import './navbar.css';

function Navbar(props) {
  const { src } = props;
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    <nav className="navbar">
      <img className="logo" src={src} alt="MLH Prep Logo" />
      <button
        type="button"
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={
          isNavExpanded ? 'navigation-menu expanded' : 'navigation-menu'
        }
      >
        <ul>
          <li>
            <a href="#News"> News</a>
          </li>
          <li>
            <a href="#songs"> Songs</a>
          </li>
          <li>
            <a href="Weather_Visualizer.html"> Weather Visualizer</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
