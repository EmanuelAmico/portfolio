import React from "react";
import arrowIcon from "../assets/static/icons/arrow-icon.svg";
import "../assets/styles/components/Button.scss";

const Button = ({ text, href }) => {
  return (
    <a
      href={href}
      target={href.startsWith("#") ? null : "_blank"}
      rel={href.startsWith("#") ? null : "noopener"}
      className="button-link"
    >
      <button>
        {text}
        <img src={arrowIcon} alt="arrow icon" className="arrow" />
      </button>
    </a>
  );
};

export default Button;
