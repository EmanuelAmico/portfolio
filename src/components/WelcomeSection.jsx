import React from 'react'
import '../assets/styles/components/WelcomeSection.scss'
import Button from './Button'
import githubIcon from '../assets/static/icons/github-icon.svg'
import linkedinIcon from '../assets/static/icons/linkedin-icon.svg'
import downloadIcon from '../assets/static/icons/download-icon.svg'

const WelcomeSection = () => {
  return (
    <section className="welcome-section">
      <div className="title-container">
        <h3>AMICO.</h3>
        <h4>FULLSTACK WEB DEVELOPER</h4>
        <Button text="View my work"/>
      </div>
      <div className="social-links-container">
        <a href="https://github.com/InevitableDesire" target="_blank">GitHub<img src={githubIcon} alt="github icon" /></a>
        <a href="https://www.linkedin.com/in/alex-emanuel-amico-212923198/" target="_blank">LinkedIn<img src={linkedinIcon} alt="linkedin icon" /></a>
        <a href="#">Download CV<img src={downloadIcon} alt="download icon" id="projects" /></a>
      </div>
    </section>
  )
}

export default WelcomeSection
