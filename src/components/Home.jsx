import React from 'react'
import ProjectSection from './ProjectSection'
import WelcomeSection from './WelcomeSection'
import AboutSection from './AboutMeSection'
import testImg1 from '../assets/static/img/test-img-1.jpg'
import testImg2 from '../assets/static/img/test-img-2.jpg'
import testImg3 from '../assets/static/img/test-img-3.jpg'
import ContactMe from './ContactMe'

const Home = () => {
  const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit in aliquam odio et et facilisi sollicitudin nulla ultrices. In mi nunc, risus utate nulla augue aenean nam at."

  return (
    <>
      <WelcomeSection />
      <ProjectSection title="Proyecto 1" text={text} image={testImg1} />
      <ProjectSection title="Proyecto 2" text={text} image={testImg2} />
      <ProjectSection title="Proyecto 3" text={text} image={testImg3} />
      <AboutSection />
      <ContactMe />
    </>
  )
}

export default Home
