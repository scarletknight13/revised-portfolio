import React from 'react'
import {BsLinkedin, BsGithub} from 'react-icons/bs'
import {SiUpwork} from 'react-icons/si'
function HeaderSocials() {
  return (
    <div className="header_socials">
        <a href="https://www.linkedin.com/in/jesse-broxton/" target="_blank"><BsLinkedin className="social-item" /></a>
        <a href="https://github.com/scarletknight13" target="_blank"><BsGithub className="social-item" /></a>
        <a href="https://www.upwork.com/freelancers/~01875895fe39b6db31" target="_blank"><SiUpwork className="social-item" /></a>
    </div>
  )
}

export default HeaderSocials