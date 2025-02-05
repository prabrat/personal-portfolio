import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.css';
import React, { useState, useEffect } from 'react';

import Home from './sections/home.js'
import Navbar from './components/Navbar'
import Skills from './sections/skills.js'
import Projects from './sections/projects.js'

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  useEffect(() => {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme); // Save preference
  }, [theme]);

  // Theme Toggle Handler
  const toggleTheme = (event) => {
      event.stopPropagation(); // Prevents accidental clicks elsewhere
      const newTheme = theme === 'light' ? 'dark' : 'light';
      setTheme(newTheme);
  };

  return (
    <div className="App">
      <Router>
        <Navbar toggleTheme={toggleTheme} /> 
        <Home /> 
        <Skills /> 
        <Projects /> 

      </Router>
    </div>  
  );
}

export default App;
