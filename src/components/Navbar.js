import React from 'react';
import '../styles/navbar.css';
import { FaGithub, FaLinkedin, FaSun, FaMoon } from 'react-icons/fa';

function Navbar({ toggleTheme }) {
  return (
    <div className="navbar">
      <div className="dropdown">
        <span className="dropdown-title">Social</span>
        <div className="dropdown-content">
          <a href="https://github.com/prabrat" target="_blank" rel="noopener noreferrer">
            <FaGithub className="icon" /> Github
          </a>
          <a href="https://www.linkedin.com/in/prabhat-jain-363677212/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="icon" /> LinkedIn
          </a>
        </div>
      </div>

      {/* Theme Toggle Button in Navbar */}
      <button className="theme-toggle" onClick={toggleTheme}>
        <FaSun size={20} />
      </button>
    </div>
  );
}

export default Navbar;
