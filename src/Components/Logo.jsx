import React from 'react'
import { motion } from 'framer-motion';
import logo from '../images/logow.png'
const Logo = () => {
  return (
    <div className='flex items-center justify-center mt-2'>
      <a className='w-16 h-16 bg-black flex items-center justify-center rounded-full'>
        <img src={logo} id='image' alt="logo" />
      </a>
    </div>
  )
}

export default Logo
