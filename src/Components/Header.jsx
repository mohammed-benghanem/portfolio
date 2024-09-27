import { useState, useEffect } from "react";

import logo from '../images/logomb2.png';
import logo2 from '../images/logomb1.png';
import { Toggle } from './Toggle';
import { MdOutlineMenu } from "react-icons/md";
import Humburger from 'hamburger-react'
const Header = ({ isDark, setIsDark }) => {
  const [active, setActive] = useState(false);

  
  const [open, setOpen] = useState(false);


 

  // Use useEffect to add scroll event listener only once
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setActive(true);
      } else {
        setActive(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
    <nav className={active ? 'activenav' : ''}>
      <div className="menu">
        <Humburger toggled={open} toggle={setOpen}  size={28}/>
      </div>
      
      <img alt='logo' className='image-light' src={logo} />
      <img alt='logo2' className='image-dark' src={logo2} />
      <ul>
        
        <li><a href="#">Home</a></li>
        <li><a href="#">About Me</a></li>
        <li><a href="#">My Skills</a></li>
        <li><a href="#">Portfolio</a></li>
      </ul>

      {/* Toggle for Dark/Light mode */}
      <Toggle handleChange={() => setIsDark(!isDark)} />
    </nav>
    {open && <div className="menu-content">
    <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About Me</a></li>
        <li><a href="#">My Skills</a></li>
        <li><a href="#">Portfolio</a></li>
      </ul>
    </div>}

    </>
  );
};

export default Header;
