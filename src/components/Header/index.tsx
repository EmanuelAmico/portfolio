import React, { useRef, useEffect, FC } from "react";
import logo from "../../../public/img/logo.svg";
import s from "./styles.module.scss";
import Image from "next/image";

type Props = {
  height: number | null | undefined;
  setHeight: (height?: number | null) => void;
};

const Header: FC<Props> = ({ height, setHeight }) => {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const setHeightTo = (height: number | null | undefined) => {
      document.documentElement.style.setProperty(
        "--header-height",
        `${height}px`,
      );
      setHeight(height);
    };

    if (!headerRef.current) return setHeightTo(null);

    !height && setHeightTo(headerRef.current.clientHeight);

    const handleResize = () => setHeightTo(headerRef?.current?.clientHeight);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [height, setHeight]);

  return (
    <header ref={headerRef} className={s.header}>
      <nav className={s.nav}>
        <a href="#start" className={s.logoImg}>
          <Image src={logo} alt="Amico logo" />
        </a>
        <div className={s.links}>
          <a href="#projects-start">Projects</a>
          <a href="#about-me">About Me</a>
          <a href="#contact-me">Contact Me</a>
        </div>
        <a
          href="https://drive.google.com/file/d/14vQlcmCEKVMKMXXyva4FkhqKNyntFJUK/view?usp=sharing"
          target="_blank"
          rel="noopener"
          className={s.downloadCV}
        >
          Download CV
        </a>
      </nav>
    </header>
  );
};

export default Header;
