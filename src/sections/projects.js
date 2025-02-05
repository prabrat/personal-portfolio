import React from 'react'
import { motion } from 'framer-motion'

import crew from '../assets/crew.png'
import radix from '../assets/radix.png'
import stravascape from '../assets/stravascape.png'
import '../styles/projects.css'

const projects = [
    { 
        title: "StravaScape", 
        description: "*Work in Progress* Allows athletes to connect their Strava and import activities to create asthetic overlays", 
        image: stravascape,
        link: "https://github.com/prabrat/StravaScape"
    }, 
    { 
        title: "Radix Childcare", 
        description: "Website for Radix Childcare",  
        image: radix,
        link: "https://github.com/prabrat/radix-web"
    }, 
    { 
        title: "Maryland Men's Crew Website", 
        description: "Website for Maryland Men's Crew at the University of Maryland", 
        image: crew, 
        link: "https://github.com/crew-umd/MMC-MainSite"
    }
]
function Projects() {
  return (
    <section> 
        <div className='projects'>
            <p className='title'>My Projects</p>
            <div className='ea'> 
                {projects.map((project, index) => ( 
                    <motion.div key={index} className="project-card" whileHover={{ scale: 1.05 }}> 
                        <img src={project.image} alt={project.title} className='project-image'/>
                        <div className='info'>
                            <h3 className='project-title'>{project.title}</h3>
                            <p className='project-description'>{project.description}</p>
                            <a href={project.link}> 
                                View Project →
                            </a>
                        </div> 
                    </motion.div> 
                ))}
            </div>
        </div>
    </section>
  )
}

export default Projects
