import React from 'react'
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
const Footer = () => {
  return (
    <div className='footer'>
        <h1>2024 © All Rights Reserved.</h1>
        <h1>Built with ♡ by M.Benghanem</h1>
        <ul>
            
            <li><a href="/"><AiFillLinkedin  className='linkedin' size={25} /></a></li>
            <li><a href="/"><AiFillGithub className='github' size={25} /></a></li>
            <li><a href="/"><AiFillInstagram className='insta' size={25} /></a></li>
          </ul>
    </div>
  )
}

export default Footer
