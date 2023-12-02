import React, { FC } from "react";
import arrowIcon from "../../../public/icons/arrow-icon.svg";
import Image from "next/image";
import s from "./styles.module.scss";

type Props = {
  text: string;
  href: string;
};

const Button: FC<Props> = ({ text, href }) => {
  return (
    <a
      href={href}
      target={href.startsWith("#") ? "" : "_blank"}
      rel={href.startsWith("#") ? "" : "noopener"}
      className={s.buttonLink}
    >
      <button>
        {text}
        <Image src={arrowIcon} alt="arrow icon" className={s.arrow} />
      </button>
    </a>
  );
};

export default Button;
