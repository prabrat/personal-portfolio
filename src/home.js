import React from 'react';
import './home.css'; 
import resume from "./resume/Prabhat Jain-Resume.pdf";

function Home() {
  return (
    <div className='home'>
    
        <div className='homeImage'>
            {/* Image will go here */}
        </div>

        <div className='bio'> 
            <h1>Prabhat Jain</h1>
            <p>Computer Science Major + Computational Finance Minor @ University of Maryland College Park</p>

            <a 
                href={resume} 
                download="Prabhat_Jain_Resume.pdf"
                className='resumeButton'
            >
                My Resume
            </a>

        </div>
    </div>
  );
}

export default Home;
