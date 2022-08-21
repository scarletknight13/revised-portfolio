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
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Odit, unde natus odio culpa quos quia molestias iusto facere consequuntur
            doloremque numquam tempora vero, explicabo dicta voluptate
            praesentium voluptatibus ea. Atque.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section >
  )
}

export default About