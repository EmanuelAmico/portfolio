import React from 'react'
import gameIcon from '../assets/static/icons/videogames-icon.svg'
import musicIcon from '../assets/static/icons/music-icon.svg'
import technologyIcon from '../assets/static/icons/technology-icon.svg'
import catIcon from '../assets/static/icons/cat-icon.svg'
import travelIcon from '../assets/static/icons/travel-icon.svg'
import animeIcon from '../assets/static/icons/anime-icon.svg'
import '../assets/styles/components/AboutMeSection.scss'

const AboutMeSection = () => {
  return (
    <section className="about-me">
      <div className="about-me-container">
        <h3>About me</h3>
        <p>Mi pasión por la informática empezó estudiando electrónica en la universidad, donde conocí el mundo de la programación.</p>

        <p>En ese entonces, me dedicaba a la venta online de videojuegos y tuve la idea de optimizar mi trabajo programando una herramienta que me permitía calcular conversión de divisas, ganancias, comisiones y precios finales.</p>

        <p>Cuando pude ver mi primer programa funcionando y como optimizó mis tareas del día a día, me di cuenta que había encontrado mi verdadera vocación.</p>
      </div>
      <div className="hobbies-container">
        <h3>Hobbies</h3>
        <div className="hobbies-table">
          <div className="hobbie-icon-container">
            <img src={gameIcon} alt="game icon" />
            <h4>Videogames</h4>
          </div>
          <div className="hobbie-icon-container">
            <img src={musicIcon} alt="music icon" />
            <h4>Great music</h4>
          </div>
          <div className="hobbie-icon-container">
            <img src={technologyIcon} alt="technology icon" />
            <h4>Technology</h4>
          </div>
          <div className="hobbie-icon-container">
            <img src={catIcon} alt="cat icon" />
            <h4>Play with Nea</h4>
          </div>
          <div className="hobbie-icon-container">
            <img src={travelIcon} alt="" />
            <h4>Travel</h4>
          </div>
          <div className="hobbie-icon-container">
            <img src={animeIcon} alt="anime icon" />
            <h4>Anime</h4>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMeSection
