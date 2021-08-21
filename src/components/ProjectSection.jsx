import React from 'react'
import Button from './Button'
import '../assets/styles/components/ProjectSection.scss'
import githubIcon from '../assets/static/icons/github-icon.svg'

const ProjectSection = ({ title, text, image, href }) => {
  return (
    <section className="project-section">
      <div className="information-container">
        <h3>{title}</h3>
        <p>{text}</p>
        <Button text="See online" href={href} />
      </div>
      <div className="img-container">
        <img src={image} alt="testing image" />
      </div>
    </section>
  )
}

export default ProjectSection
