import React, { FC } from "react";
import githubIcon from "../../../public/icons/github-icon.svg";
import linkedinIcon from "../../../public/icons/linkedin-icon.svg";
import downloadIcon from "../../../public/icons/download-icon.svg";
import s from "./styles.module.scss";
import Image from "next/image";
import Button from "@/commons/Button";

const WelcomeSection: FC = () => {
  return (
    <section className={s.welcomeSection} id="start">
      <div className={s.titleContainer}>
        <h3>AMICO.</h3>
        <h4>FULL STACK DEVELOPER</h4>
        <Button text="View my work" href="#projects-start" />
      </div>
      <div className={s.socialLinksContainer}>
        <a
          href="https://drive.google.com/file/d/14vQlcmCEKVMKMXXyva4FkhqKNyntFJUK/view?usp=sharing"
          target="_blank"
          rel="noopener"
        >
          Download CV
          <Image src={downloadIcon} alt="download icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/emanuel-amico/"
          target="_blank"
          rel="noopener"
        >
          LinkedIn
          <Image src={linkedinIcon} alt="linkedin icon" />
        </a>
        <a
          href="https://github.com/InevitableDesire"
          target="_blank"
          rel="noopener"
        >
          GitHub
          <Image src={githubIcon} alt="github icon" />
        </a>
      </div>
    </section>
  );
};

export default WelcomeSection;
