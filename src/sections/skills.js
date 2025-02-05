import React from 'react'
import { FaReact, FaGithub, FaVuejs, FaNodeJs, FaJava } from 'react-icons/fa'
import { SiNextdotjs, SiJavascript } from 'react-icons/si';
import '../styles/skills.css'

function skills() {
  return (
    <div className='skills'>
        <div className='skill-icons'> 
        <FaReact /> 
        <FaVuejs /> 
        <SiNextdotjs /> 
        <SiJavascript /> 
        <FaNodeJs /> 
        <FaJava /> 
        <FaGithub /> 
        </div>
    </div>
  )
}

export default skills
