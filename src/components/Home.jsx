import React from 'react'
import ProjectSection from './ProjectSection'
import WelcomeSection from './WelcomeSection'
import AboutSection from './AboutMeSection'
import menteematchImg from '../assets/static/img/MenteeMatch.jpg'
import deluxoImg from '../assets/static/img/Deluxo.jpg'
import omdbImg from '../assets/static/img/MyMovie.jpg'
import ContactMe from './ContactMe'

const Home = () => {
  const menteematchText = "I am developing a mobile application together with a team of 6 people as a professional practice in Globant. We are implementing agile and accessibility at a WCAG AA level. Technologies. • React Native • Express • MongoDB • NodeJS • Redux"
  
  const ecommerceText = "I developed a clothing e-commerce together with a team of 6 people in 2 weeks. We used agile methodologies and the following technologies. • PostgreSQL • Sequelize • Express • React • NodeJS • Redux"
  
  const omdbText = "I developed this web application independently, it allows you as an user to search for movies, show your profile, authenticate, save and show favorite movies. Technologies. • PostgreSQL • Sequelize • Express • ReactJS • REST API"

  return (
    <>
      <WelcomeSection />
      <ProjectSection title="MenteeMatch" text={menteematchText} image={menteematchImg} href="https://youtu.be/08SFGWlJ6dM" />
      <ProjectSection title="Deluxo" text={ecommerceText} image={deluxoImg} href="https://youtu.be/S4T-IAmdA2c" />
      <ProjectSection title="MyMovie" text={omdbText} image={omdbImg} href="https://youtu.be/CnQ99PG1XOI" />
      <AboutSection />
      <ContactMe />
    </>
  )
}

export default Home
