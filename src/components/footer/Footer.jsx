import React from 'react'
import './footer.css'

function Footer() {
  return (
    <footer id="footer">
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <h5 className="signature">Developed By Jesse Broxton</h5>
    </footer>
  )
}

export default Footer