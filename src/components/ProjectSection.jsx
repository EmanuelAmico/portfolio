import React from 'react'
import Button from './Button'
import '../assets/styles/components/ProjectSection.scss'

const ProjectSection = ({ title, text, image }) => {
  return (
    <section className="project-section">
      <div className="information-container">
        <h3>{title}</h3>
        <p>{text}</p>
        <Button text="Ver online" />
      </div>
      <div className="img-container">
        <img src={image} alt="testing image" />
      </div>
    </section>
  )
}

export default ProjectSection
