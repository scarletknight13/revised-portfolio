import React from 'react'
import './nav.css'
import {AiOutlineHome, AiOutlineProject, AiOutlineUser, AiOutlinePhone} from 'react-icons/ai'
import {CgWorkAlt} from 'react-icons/cg'
import{useState} from 'react'
function Nav() {
  const [activeNav, setActiveNav] = useState(undefined);
  return (
    <nav>
      <a href="#home" onClick={(e) => setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#about" onClick={(e) => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#experience" onClick={(e) => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><CgWorkAlt/></a>
      <a href="#portfolio" onClick={(e) => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><AiOutlineProject/></a>
      <a href="#contact" onClick={(e) => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiOutlinePhone/></a>
    </nav>
  )
}

export default Nav