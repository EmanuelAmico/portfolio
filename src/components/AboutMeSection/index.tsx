import React, { FC } from "react";
import gameIcon from "../../../public/icons/videogames-icon.svg";
import musicIcon from "../../../public/icons/music-icon.svg";
import technologyIcon from "../../../public/icons/technology-icon.svg";
import catIcon from "../../../public/icons/cat-icon.svg";
import travelIcon from "../../../public/icons/travel-icon.svg";
import animeIcon from "../../../public/icons/anime-icon.svg";
import InternalLinkHelper from "../../commons/InternalLinkHelper";
import Image from "next/image";
import s from "./styles.module.scss";

type Props = {
  headerHeight: number | null | undefined;
};

const AboutMeSection: FC<Props> = ({ headerHeight }) => {
  return (
    <section className={s.aboutMe}>
      <InternalLinkHelper elementHeight={headerHeight} id="about-me" />
      <div className={s.aboutMeContainer}>
        <h3>About me</h3>
        <p>
          My passion for computers began studying electronics at the university,
          where I got to know the world of programming.
        </p>

        <p>
          At that time, I was dedicated to the online sales of video games and I
          had the idea of optimizing my work by programming tools that allowed
          me to calculate currency conversion, earnings, commissions and final
          prices.
        </p>

        <p>
          When I was able to see my first program working and how it optimized
          my day-to-day tasks, I realized that I had found my true career!.
        </p>
      </div>
      <div className={s.hobbiesContainer}>
        <h3>Hobbies</h3>
        <div className={s.hobbiesTable}>
          <div className={s.hobbyIconContainer}>
            <Image src={gameIcon} alt="game icon" />
            <h4>Videogames</h4>
          </div>
          <div className={s.hobbyIconContainer}>
            <Image src={musicIcon} alt="music icon" />
            <h4>Great music</h4>
          </div>
          <div className={s.hobbyIconContainer}>
            <Image src={technologyIcon} alt="technology icon" />
            <h4>Technology</h4>
          </div>
          <div className={s.hobbyIconContainer}>
            <Image src={catIcon} alt="cat icon" />
            <h4>Play with Nea</h4>
          </div>
          <div className={s.hobbyIconContainer}>
            <Image src={travelIcon} alt="" />
            <h4>Travel</h4>
          </div>
          <div className={s.hobbyIconContainer}>
            <Image src={animeIcon} alt="anime icon" />
            <h4>Anime</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
