import React from "react";
import githubIcon from '../assets/static/icons/github-icon.svg'
import linkedinIcon from '../assets/static/icons/linkedin-icon.svg'
import downloadIcon from '../assets/static/icons/download-icon.svg'
import '../assets/styles/components/ContactMe.scss'

const ContactMe = () => {
  return (
    <section className="contact-me" id="contactme">
      <div>
        <h4>Are you interested in my profile?</h4>
        <h3>Let's work together</h3>
        <div className="contact-me-social-links">
          <a href="https://github.com/InevitableDesire" target="_blank" rel="noopener"><img src={githubIcon} alt="github icon" />GitHub</a>
          <a href="https://www.linkedin.com/in/emanuel-amico/" target="_blank" rel="noopener"><img src={linkedinIcon} alt="linkedin icon" />LinkedIn</a>
          <a href="https://drive.google.com/file/d/14vQlcmCEKVMKMXXyva4FkhqKNyntFJUK/view?usp=sharing" target="_blank" rel="noopener"><img src={downloadIcon} alt="download icon" />Download CV</a>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
