import React, { FC } from "react";
import Image, { StaticImageData } from "next/image";
import InternalLinkHelper from "@/commons/InternalLinkHelper";
import Button from "@/commons/Button";
import s from "./styles.module.scss";

type Props = {
  title: string;
  text: string;
  image: StaticImageData;
  href: string;
  headerHeight?: number | null | undefined;
};

const ProjectSection: FC<Props> = ({
  title,
  text,
  image,
  href,
  headerHeight,
}) => {
  return (
    <section className={s.projectSection}>
      {title === "MenteeMatch" && (
        <InternalLinkHelper id="projects-start" elementHeight={headerHeight} />
      )}
      <div className={s.informationContainer}>
        <h3>{title}</h3>
        <p>{text}</p>
        <Button text="See online" href={href} />
      </div>
      <div className={s.imgContainer}>
        <Image src={image} alt="project image" />
      </div>
    </section>
  );
};

export default ProjectSection;
