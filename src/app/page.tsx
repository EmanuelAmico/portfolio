"use client";
import React, { useState } from "react";
import Header from "@/components/Header";
import AboutMeSection from "@/components/AboutMeSection";
import AnimationBackground from "@/commons/AnimationBackground";
import WelcomeSection from "@/components/WelcomeSection";
import menteematchImg from "../../public/img/MenteeMatch.jpg";
import deluxoImg from "../../public/img/Deluxo.jpg";
import omdbImg from "../../public/img/MyMovie.jpg";
import ProjectSection from "@/components/ProjectSection";
import ContactMeSection from "@/components/ContactMeSection";

export default function Home() {
  const [headerClientHeight, setHeaderClientHeight] = useState<
    number | null | undefined
  >(null);
  const menteematchText =
    "I developed a mobile application together with a team of 6 people as a professional practice in Globant. We implemented agile and accessibility at a WCAG AA level. Technologies. • React Native • Express • MongoDB • NodeJS • Redux";

  const ecommerceText =
    "I developed a clothing e-commerce together with a team of 6 people in 2 weeks. We used agile methodologies and the following technologies. • PostgreSQL • Sequelize • Express • React • NodeJS • Redux • Front-end deployed on Vercel • Back-end deployed on AWS";

  const omdbText =
    "I developed this web application independently, it allows you as an user to search for movies, show your profile, authenticate, save and show favorite movies. Technologies. • MongoDB • Mongoose • Express • ReactJS • REST API • Front-end deployed on Vercel • Back-end deployed on AWS";

  return (
    <>
      <Header height={headerClientHeight} setHeight={setHeaderClientHeight} />
      <WelcomeSection />
      <ProjectSection
        title="MenteeMatch"
        text={menteematchText}
        image={menteematchImg}
        href="https://youtu.be/kjqSv80KrOU"
        headerHeight={headerClientHeight}
      />
      <ProjectSection
        title="Deluxo"
        text={ecommerceText}
        image={deluxoImg}
        href="https://deluxo.com.ar"
      />
      <ProjectSection
        title="MyMovie"
        text={omdbText}
        image={omdbImg}
        href="https://mymovie.com.ar"
      />
      <AboutMeSection headerHeight={headerClientHeight} />
      <ContactMeSection headerHeight={headerClientHeight} />
      <AnimationBackground />
    </>
  );
}
