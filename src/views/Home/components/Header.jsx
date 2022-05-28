import React, { useRef, useEffect } from "react";
import logo from "../../../assets/static/img/logo.svg";
import "../../../assets/styles/components/Header.scss";

const Header = ({ height, setHeight }) => {
  const headerRef = useRef(null);

  useEffect(() => {
    const setHeightTo = (height) => {
      document.documentElement.style.setProperty(
        "--header-height",
        `${height}px`
      );
      setHeight(height);
    };

    !height && setHeightTo(headerRef.current.clientHeight);

    const handleResize = () => setHeightTo(headerRef.current.clientHeight);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header ref={headerRef}>
      <nav>
        <a href="#" className="logo-img">
          <img src={logo} alt="Amico logo" href="#" />
        </a>
        <div className="links">
          <a href="#projects-start">Projects</a>
          <a href="#about-me">About Me</a>
          <a href="#contact-me">Contact Me</a>
        </div>
        <a
          href="https://drive.google.com/file/d/14vQlcmCEKVMKMXXyva4FkhqKNyntFJUK/view?usp=sharing"
          target="_blank"
          rel="noopener"
          className="download-cv"
        >
          Download CV
        </a>
      </nav>
    </header>
  );
};

export default Header;
