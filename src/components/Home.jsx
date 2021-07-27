import React from 'react'
import ProjectSection from './ProjectSection'
import WelcomeSection from './WelcomeSection'
import AboutSection from './AboutMeSection'
import testImg1 from '../assets/static/img/test-img-1.jpg'
import testImg2 from '../assets/static/img/test-img-2.jpg'
import testImg3 from '../assets/static/img/test-img-3.jpg'
import ContactMe from './ContactMe'

const Home = () => {
  const menteematchText = "I am developing together with a team of 6 people a mobile application for mentoring as a professional practice in the company, we are using agile and accessibility WCAG AA level. Technologies. -React Native -Express -MongoDB -NodeJS -Redux"
  
  const ecommerceText = "I developed a clothing e-commerce together with a team of 6 people in 2 weeks. I used agile methodologies and the following technologies were used. -PostgreSQL -Sequelize -Express -React -NodeJS -Redux"
  
  const omdbText = "I developed a web application independently, it allows you as an user to search for movies, show your profile, authenticate, save and show favorite movies. Technologies. -PostgreSQL -Sequelize -Express -ReactJS -REST API"

  return (
    <>
      <WelcomeSection />
      <ProjectSection title="Project - MenteeMatch" text={menteematchText} image={testImg1} href="https://youtu.be/08SFGWlJ6dM" />
      <ProjectSection title="Project - Deluxo" text={ecommerceText} image={testImg2} href="https://youtu.be/S4T-IAmdA2c" />
      <ProjectSection title="Project - MyMovie" text={omdbText} image={testImg3} href="https://youtu.be/CnQ99PG1XOI" />
      <AboutSection />
      <ContactMe />
    </>
  )
}

export default Home
