import React from "react";
import Button from "../../../commons/Button";
import InternalLinkHelper from "../../../commons/InternalLinkHelper";
import "../../../assets/styles/components/ProjectSection.scss";

const ProjectSection = ({ title, text, image, href, headerHeight }) => {
  return (
    <section
      className={
        title === "MenteeMatch"
          ? "project-section position-relative"
          : "project-section"
      }
    >
      {title === "MenteeMatch" && (
        <InternalLinkHelper id="projects-start" elementHeight={headerHeight} />
      )}
      <div className="information-container">
        <h3>{title}</h3>
        <p>{text}</p>
        <Button text="See online" href={href} />
      </div>
      <div className="img-container">
        <img src={image} alt="testing image" />
      </div>
    </section>
  );
};

export default ProjectSection;
