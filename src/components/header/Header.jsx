import React from 'react'
import './header.css'
import CTA from './CTA.jsx'
import ME from '../../assets/selfie.png'
import HeaderSocials from './HeaderSocials'

function Header() {
  return (
    <header>
      <div id='home' className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Jesse Broxton</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA/>
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <HeaderSocials/>
        <a href="#contact" className="scroll_dowm">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header