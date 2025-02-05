import React from 'react';
import '../styles/home.css'; 
import resume from "../assets/Prabhat Jain-Resume.pdf"
import tempImg from '../assets/tmp.png'

function Home({ toggleTheme }) {
    
  return (
    <div className='home'>
    
        <div className='homeImage' style={{ float: 'right' }}>
            <img src={tempImg} /> 
        </div>

        <div className='bio' style={{ float: 'left' }}> 
            <p>Hello, I'm <span className='myName'>Prabhat.</span></p>
            <p className='intro'>I'm an aspiring software engineer.</p>

            {/*<p>I’m a Computer Science student at the University of Maryland, <br/> 
                actively building full-stack web applications and honing my skills in software engineering and cybersecurity.</p>
            */}

            <a 
                href={resume} 
                download="Prabhat_Jain_Resume.pdf"
                className='resumeButton'
            >
                My Resume
            </a>
        </div>

        <div className='projects'> 
            {/* Add my projects here */}
        </div> 

    </div>
  );
}

export default Home;
