import React from 'react'
import './portfolio.css'
import IMGI from '../../assets/lovetrills.png'
import lovetrills from '../../assets/lovetrills.png'
import dots from '../../assets/dotsandboxes.png'
import youtube from '../../assets/youtubeclone.png'
import duoamigo from '../../assets/duoamigo.png'

const data = [
  {
    id: 1,
    title: 'Dots-and-Boxes',
    image: dots,
    github: 'https://github.com/scarletknight13/Dots-and-Boxes',
    live: 'https://scarletknight13.github.io/Dots-and-Boxes/'
  },
  {
    id: 2,
    title: 'DuoAmigo',
    image: duoamigo,
    github: 'https://github.com/Austintigerlu/translate-frontend/',
    live: 'https://main--duo-amigo.netlify.app/'
  },
  {
    id: 3,
    title: 'Youtube Clone',
    image: youtube,
    github: 'https://github.com/scarletknight13/Youtube-Clone',
    live: 'https://dry-forest-91090.herokuapp.com/'
  },
  {
    id: 4,
    title: 'LoveTrills',
    image: lovetrills,
    github: 'https://github.com/scarletknight13/spotifind-frontend/',
    live: 'https://lovetrills.netlify.app/'
  }
]
const formatData = data.map((project) =>
  <article className="portfolio-item">
    <h3 className="portfolio-item-title">{project.title}</h3>
    <div className="portfolio-item-image">
      <img src={project.image} alt={`project-${project.id}`} />
    </div>
    <div className="portfolio-item-cta">
      <a href={project.github} className='btn'>Github</a>
      <a href={project.live} className='btn btn-primary' target='_blank'>Live Demo</a>
    </div>
  </article>
)
function Portfolio() {
  return (
    <section id="portfolio">
      <h5>Recent Projects</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio-container">
        {formatData}
      </div>
    </section>
  )
}

export default Portfolio