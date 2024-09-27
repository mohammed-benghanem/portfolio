import React from 'react'
import profil from "../images/profildark2.png"
import profil2 from "../images/profil9.png"
import { HiOutlineDownload } from "react-icons/hi";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";

const Hero = () => {
  return (
    <div className='hero'>
      <div className="social-icons">
      
          <ul>
            
            <li><a href="/"><AiFillLinkedin  className='linkedin' size={30} /></a></li>
            <li><a href="/"><AiFillGithub className='github' size={30} /></a></li>
            <li><a href="/"><AiFillInstagram className='insta' size={30} /></a></li>
          </ul>
         
      </div>
      <div className="info">
        <p>Hello I’m</p>
        
        <h2>Mohammed Benghanem</h2>
        <p>Web Developer</p>
        <div className="double">
        <h3>Resume  <HiOutlineDownload size={30} /> </h3>
        
        </div>
        <p><span>Contact Me</span></p>
      </div>  
      <div className="profil">
        <img src={profil} className='image-dark' alt="profil" />
        <img src={profil2} className='image-light' alt="profil" />
      </div>
      
    </div>
  )
}

export default Hero
