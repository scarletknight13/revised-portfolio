import React from 'react'
import './about.css'
import aboutMeImage from '../../assets/self_pic.jpg'
import {BsAwardFill} from 'react-icons/bs'
import {FaUsers, FaFolder} from 'react-icons/fa'

function About() {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about-container">
        <div className="about-me">
          <div className="about-me-image">
            <img className='selfie' src={aboutMeImage} alt="me" />
          </div>
        </div>
        <div className="about-content">
          <div className="about-cards">
            <article className='about-card'>
              <BsAwardFill className='about-icon'/>
              <h5>Experience</h5>
              <small>3+ Years</small>
            </article>
            <article className='about-card'>
              <FaUsers className='about-icon'/>
              <h5>Clients</h5>
              <small>3 Satisfied Clients</small>
            </article>
            <article className='about-card'>
              <FaFolder className='about-icon'/>
              <h5>Projects</h5>
              <small>5+ Projects</small>
            </article>
          </div>
          <p>Software engineer, computer scientist, and problem solver. I have been studying and practicing computer science for the last three years and I really enjoy the science part of computer science. Proficient in C++ and Full Stack softwares and looking to use my experience and problem solving skills to create solutions that will better people's lives.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section >
  )
}

export default About