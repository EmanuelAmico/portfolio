import React, { FC } from "react";
import arrowIcon from "../../../public/icons/arrow-icon.svg";
import Image from "next/image";
import s from "./styles.module.scss";
import NextLink from "next/link";

type Props = {
  text: string;
  href: string;
};

const Link: FC<Props> = ({ text, href }) => {
  return (
    <NextLink
      href={href}
      target={href.startsWith("#") ? "" : "_blank"}
      rel={href.startsWith("#") ? "" : "noopener"}
      className={s.buttonLink}
    >
      <button>
        {text}
        <Image src={arrowIcon} alt="arrow icon" className={s.arrow} />
      </button>
    </NextLink>
  );
};

export default Link;
