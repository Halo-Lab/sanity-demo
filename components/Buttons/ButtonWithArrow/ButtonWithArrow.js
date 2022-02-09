import React from "react";
import s from "./ButtonWithArrow.module.scss";
import ArrowIcon from "../../../assets/ArrowIcon";

const ButtonWithArrow = ({ buttonText }) => {
  const { url } = "https://www.halo-lab.com/";
  return (
    <a href={url} className={s.buttonArrow} rel="nofollow">
      <div className={s.buttonWrapper}>
        {buttonText}
        {<ArrowIcon />}
      </div>
    </a>
  );
};

export default ButtonWithArrow;
