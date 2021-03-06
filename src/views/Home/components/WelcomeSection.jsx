import React from "react";
import Button from "../../../commons/Button";
import githubIcon from "../../../assets/static/icons/github-icon.svg";
import linkedinIcon from "../../../assets/static/icons/linkedin-icon.svg";
import downloadIcon from "../../../assets/static/icons/download-icon.svg";
import "../../../assets/styles/components/WelcomeSection.scss";

const WelcomeSection = () => {
  return (
    <section className="welcome-section">
      <div className="title-container">
        <h3>AMICO.</h3>
        <h4>FULL STACK DEVELOPER</h4>
        <Button text="View my work" href="#projects-start" />
      </div>
      <div className="social-links-container">
        <a
          href="https://drive.google.com/file/d/14vQlcmCEKVMKMXXyva4FkhqKNyntFJUK/view?usp=sharing"
          target="_blank"
          rel="noopener"
        >
          Download CV
          <img src={downloadIcon} alt="download icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/emanuel-amico/"
          target="_blank"
          rel="noopener"
        >
          LinkedIn
          <img src={linkedinIcon} alt="linkedin icon" />
        </a>
        <a
          href="https://github.com/InevitableDesire"
          target="_blank"
          rel="noopener"
        >
          GitHub
          <img src={githubIcon} alt="github icon" />
        </a>
      </div>
    </section>
  );
};

export default WelcomeSection;
