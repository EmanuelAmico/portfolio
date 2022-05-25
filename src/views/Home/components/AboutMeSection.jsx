import React from "react";
import gameIcon from "../../../assets/static/icons/videogames-icon.svg";
import musicIcon from "../../../assets/static/icons/music-icon.svg";
import technologyIcon from "../../../assets/static/icons/technology-icon.svg";
import catIcon from "../../../assets/static/icons/cat-icon.svg";
import travelIcon from "../../../assets/static/icons/travel-icon.svg";
import animeIcon from "../../../assets/static/icons/anime-icon.svg";
import "../../../assets/styles/components/AboutMeSection.scss";
import InternalLinkHelper from "../../../commons/InternalLinkHelper";

const AboutMeSection = ({ headerHeight }) => {
  return (
    <section className="about-me position-relative">
      <InternalLinkHelper elementHeight={headerHeight} id="about-me" />
      <div className="about-me-container">
        <h3>About me</h3>
        <p>
          My passion for computers began studying electronics at the university,
          where I got to know the world of programming.
        </p>

        <p>
          At that time, I was dedicated to the online sales of video games and I
          had the idea of ​​optimizing my work by programming tools that allowed
          me to calculate currency conversion, earnings, commissions and final
          prices.
        </p>

        <p>
          When I was able to see my first program working and how it optimized
          my day-to-day tasks, I realized that I had found my true career!.
        </p>
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
  );
};

export default AboutMeSection;
