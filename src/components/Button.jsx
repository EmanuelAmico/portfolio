import React from "react";
import arrowIcon from "../assets/static/icons/arrow-icon.svg";
import "../assets/styles/components/Button.scss";

const Button = ({ text }) => {
  return (
    <button>
      {text}
      <img src={arrowIcon} alt="arrow icon" className="arrow" />
    </button>
  );
};

export default Button;
