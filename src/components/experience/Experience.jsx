import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'
import {DiCss3, DiHtml5, DiReact, DiJavascript1, DiSass, DiMongodb, DiPostgresql} from 'react-icons/di'
import {FaNodeJs, FaPython, FaBootstrap} from 'react-icons/fa';
import {SiDjango, SiCplusplus} from 'react-icons/si'
function Experience() {
  return (
    <section id='experience'>
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>
      <div className="container experience-container">
        <div className="experience-frontend">
          <h3>Frontend</h3>
          <div className="experience-content">
            <article className="experience-details">
              <DiHtml5 color="orange" className="experience-details-icon"/>
              <div>
                <h4>HTML</h4>
                <div class="skill-container">
                  <div class="bar fill2"></div>
                </div>
                <div className="skill-label">
                  <small className="text-light">Beginner</small>
                  <small className="text-light">Expert</small>
                </div>
              </div>
            </article>
            <article className="experience-details">
              <DiCss3 className="experience-details-icon"/>
              <div>
                <h4>CSS</h4>
                 <div class="skill-container">
                  <div class="bar fill2"></div>
                </div>
                <div className="skill-label">
                  <small className="text-light">Beginner</small>
                  <small className="text-light">Expert</small>
                </div>
              </div>
            </article>
            <article className="experience-details">
              <DiReact className="experience-details-icon"/>
              <div>
                <h4>React</h4>
                 <div class="skill-container">
                  <div class="bar fill3"></div>
                </div>
                <div className="skill-label">
                  <small className="text-light">Beginner</small>
                  <small className="text-light">Expert</small>
                </div>
              </div>
            </article>
            <article className="experience-details">
              <DiJavascript1 color="yellow" className="experience-details-icon"/>
              <div>
                <h4>Javascript</h4>
                 <div class="skill-container">
                  <div class="bar fill1"></div>
                </div>
                <div className="skill-label">
                  <small className="text-light">Beginner</small>
                  <small className="text-light">Expert</small>
                </div>
              </div>
            </article>
            <article className="experience-details">
              <DiSass color="pink" className="experience-details-icon"/>
              <div>
                <h4>SASS</h4>
                 <div class="skill-container">
                  <div class="bar fill1"></div>
                </div>
                <div className="skill-label">
                  <small className="text-light">Beginner</small>
                  <small className="text-light">Expert</small>
                </div>
              </div>
            </article>
            <article className="experience-details">
              <FaBootstrap color="black" className="experience-details-icon"/>
              <div>
                <h4>Bootstrap</h4>
                 <div class="skill-container">
                  <div class="bar fill1"></div>
                </div>
                <div className="skill-label">
                  <small className="text-light">Beginner</small>
                  <small className="text-light">Expert</small>
                </div>
              </div>
            </article>
          </div>
        </div>
        <div className="experience-backend">
          <h3>Backend</h3>
          <div className="experience-content">
            <article className="experience-details">
              <DiMongodb color="green" className="experience-details-icon"/>
              <div>
                <h4>MongoDB</h4>
                 <div class="skill-container">
                  <div class="bar fill1"></div>
                </div>
                <div className="skill-label">
                  <small className="text-light">Beginner</small>
                  <small className="text-light">Expert</small>
                </div>
              </div>
            </article>
            <article className="experience-details">
              <DiPostgresql className="experience-details-icon"/>
              <div>
                <h4>SQL</h4>
                 <div class="skill-container">
                  <div class="bar fill1"></div>
                </div>
                <div className="skill-label">
                  <small className="text-light">Beginner</small>
                  <small className="text-light">Expert</small>
                </div>
              </div>
            </article>
            <article className="experience-details">
              <FaNodeJs color="green" className="experience-details-icon"/>
              <div>
                <h4>Node</h4>
                 <div class="skill-container">
                  <div class="bar fill1"></div>
                </div>
                <div className="skill-label">
                  <small className="text-light">Beginner</small>
                  <small className="text-light">Expert</small>
                </div>
              </div>
            </article>
            <article className="experience-details">
              <SiDjango className="experience-details-icon"/>
              <div>
                <h4>Django</h4>
                 <div class="skill-container">
                  <div class="bar fill1"></div>
                </div>
                <div className="skill-label">
                  <small className="text-light">Beginner</small>
                  <small className="text-light">Expert</small>
                </div>
              </div>
            </article>
            <article className="experience-details">
              <FaPython color="gray" className="experience-details-icon"/>
              <div>
                <h4>Python</h4>
                 <div class="skill-container">
                  <div class="bar fill1"></div>
                </div>
                <div className="skill-label">
                  <small className="text-light">Beginner</small>
                  <small className="text-light">Expert</small>
                </div>
              </div>
            </article>
            <article className="experience-details">
              <SiCplusplus color="#4169e1" className="experience-details-icon"/>
              <div>
                <h4>C++</h4>
                 <div class="skill-container">
                  <div class="bar fill1"></div>
                </div>
                <div className="skill-label">
                  <small className="text-light">Beginner</small>
                  <small className="text-light">Expert</small>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience