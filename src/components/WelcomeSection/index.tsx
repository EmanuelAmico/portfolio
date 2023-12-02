import React, { FC } from "react";
import githubIcon from "../../../public/icons/github-icon.svg";
import linkedinIcon from "../../../public/icons/linkedin-icon.svg";
import downloadIcon from "../../../public/icons/download-icon.svg";
import gitlabIcon from "../../../public/icons/gitlab-icon.svg";
import Image from "next/image";
import Button from "@/commons/Link";
import Link from "next/link";
import s from "./styles.module.scss";

const WelcomeSection: FC = () => {
  return (
    <section className={s.welcomeSection} id="start">
      <div className={s.titleContainer}>
        <h3>AMICO.</h3>
        <h4>FULL STACK DEVELOPER</h4>
        <Button text="View my work" href="#projects-start" />
      </div>
      <div className={s.socialLinksContainer}>
        <Link
          href="https://drive.google.com/file/d/14vQlcmCEKVMKMXXyva4FkhqKNyntFJUK/view?usp=sharing"
          target="_blank"
          rel="noopener"
        >
          Download CV
          <Image src={downloadIcon} alt="download icon" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/emanuel-amico/"
          target="_blank"
          rel="noopener"
        >
          LinkedIn
          <Image src={linkedinIcon} alt="linkedin icon" />
        </Link>
        <Link
          href="https://gitlab.com/emanuelamico"
          target="_blank"
          rel="noopener"
        >
          GitLab
          <Image src={gitlabIcon} alt="gitlab icon" />
        </Link>
        <Link
          href="https://github.com/emanuelamico"
          target="_blank"
          rel="noopener"
        >
          GitHub
          <Image src={githubIcon} alt="github icon" />
        </Link>
      </div>
    </section>
  );
};

export default WelcomeSection;
