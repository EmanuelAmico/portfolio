import React from 'react'
import logo from '../assets/static/img/logo.svg'
import '../assets/styles/components/Header.scss'

const Header = () => {
  return (
    <header>
      <a href="#" className="logo-img"><img src={logo} alt="Amico logo" href="#"/></a>
      <div className="links">
        <a href="#projects">Projects</a>
        <a href="#aboutme">About Me</a>
        <a href="#contactme">Contact Me</a>
      </div>
      <a href="#downloadcv" className="download-cv">Download CV</a>
    </header>
  )
}

export default Header
