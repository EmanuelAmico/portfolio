import React from "react";
import ProjectSection from "./components/ProjectSection";
import WelcomeSection from "./components/WelcomeSection";
import AboutMeSection from "./components/AboutMeSection";
import menteematchImg from "../../assets/static/img/MenteeMatch.jpg";
import deluxoImg from "../../assets/static/img/Deluxo.jpg";
import omdbImg from "../../assets/static/img/MyMovie.jpg";
import ContactMeSection from "./components/ContactMeSection";

const Home = () => {
  const menteematchText =
    "I developed a mobile application together with a team of 6 people as a professional practice in Globant. We implemented agile and accessibility at a WCAG AA level. Technologies. • React Native • Express • MongoDB • NodeJS • Redux";

  const ecommerceText =
    "I developed a clothing e-commerce together with a team of 6 people in 2 weeks. We used agile methodologies and the following technologies. • PostgreSQL • Sequelize • Express • React • NodeJS • Redux • Front-end deployed on Vercel • Back-end deployed on AWS";

  const omdbText =
    "I developed this web application independently, it allows you as an user to search for movies, show your profile, authenticate, save and show favorite movies. Technologies. • MongoDB • Mongoose • Express • ReactJS • REST API • Front-end deployed on Vercel • Back-end deployed on AWS";

  return (
    <>
      <WelcomeSection />
      <ProjectSection
        title="MenteeMatch"
        text={menteematchText}
        image={menteematchImg}
        href="https://youtu.be/kjqSv80KrOU"
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
      <AboutMeSection />
      <ContactMeSection />
    </>
  );
};

export default Home;
