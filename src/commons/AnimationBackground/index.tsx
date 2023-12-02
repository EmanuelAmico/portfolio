import React from "react";
import s from "./style.module.scss";

const AnimationBackground = () => {
  return (
    <div className={s.view}>
      <div className={`${s.plane} ${s.main}`}>
        <div className={s.circle} />
        <div className={s.circle} />
        <div className={s.circle} />
        <div className={s.circle} />
        <div className={s.circle} />
        <div className={s.circle} />
      </div>
    </div>
  );
};

export default AnimationBackground;
