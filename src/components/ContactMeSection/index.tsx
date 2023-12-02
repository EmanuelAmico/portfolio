import React, { FC } from "react";
import githubIcon from "../../../public/icons/github-icon.svg";
import linkedinIcon from "../../../public/icons/linkedin-icon.svg";
import downloadIcon from "../../../public/icons/download-icon.svg";
import InternalLinkHelper from "@/commons/InternalLinkHelper";
import Image from "next/image";
import Link from "next/link";
import s from "./styles.module.scss";

type Props = {
  headerHeight: number | null | undefined;
};

const ContactMe: FC<Props> = ({ headerHeight }) => {
  return (
    <section className={s.contactMe}>
      <InternalLinkHelper elementHeight={headerHeight} id="contact-me" />
      <div>
        <h4>Are you interested in my profile?</h4>
        <h3>Let&apos;s work together</h3>
        <div className={s.contactMeSocialLinks}>
          <Link
            href="https://drive.google.com/file/d/14vQlcmCEKVMKMXXyva4FkhqKNyntFJUK/view?usp=sharing"
            target="_blank"
            rel="noopener"
          >
            <Image src={downloadIcon} alt="download icon" />
            Download CV
          </Link>
          <Link
            href="https://www.linkedin.com/in/emanuel-amico/"
            target="_blank"
            rel="noopener"
          >
            <Image src={linkedinIcon} alt="linkedin icon" />
            LinkedIn
          </Link>
          <Link
            href="https://github.com/EmanuelAmico"
            target="_blank"
            rel="noopener"
          >
            <Image src={githubIcon} alt="github icon" />
            GitHub
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
