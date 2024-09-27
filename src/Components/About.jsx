import React from 'react'
import profilabout from '../images/profilabout.png'
import profilabout2 from '../images/profilabout2.png'
import { HiExternalLink } from "react-icons/hi";
const About = () => {
  return (
    <div className='about'>
      <div className="about-content">
      <img src={profilabout} className='about-img-light' alt="profil" /> 
      <img src={profilabout2} alt="profil" className='about-img-dark' /> 
      <div className="about-info">
         <h1>About Me</h1>
         <p>
         Hi, I'm Mohammed Benghanem, a Java and React developer with 2 years of experience in full-stack development. I specialize in creating scalable, efficient applications using <span className='java'>Java</span> for the backend, <span className='react'>React</span> for the frontend, and <span className='mongo'>MongoDB</span> for database management. My focus is on delivering intuitive, user-friendly solutions that combine functionality with clean design. Let's collaborate to bring your next project to life!
         </p>
         <div className="my-work">
         <h2>See My Work <HiExternalLink size={30} /> </h2>
         </div>
      </div>
      </div>
    </div>
  )
}

export default About
