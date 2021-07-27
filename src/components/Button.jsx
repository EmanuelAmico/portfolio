import React from "react";
import arrowIcon from "../assets/static/icons/arrow-icon.svg";
import "../assets/styles/components/Button.scss";

const Button = ({ text, href, target }) => {
  return (
    <a href={href} target={target ?? "_blank"} className="button-link">
      <button>
        {text}
        <img src={arrowIcon} alt="arrow icon" className="arrow" />
      </button>
    </a>
  );
};

export default Button;
