import React from "react";
import s from "./MobileAppFunction.module.scss";
import { urlFor } from "../../../../../utils/sanity";

const MobileAppFunction = ({ data, key }) => {
  const { icon, title } = data;

  return (
    <div className={s.mobileAppFunction} key={key}>
      <img className={s.img} src={urlFor(icon)} alt={title} />
      <span className={s.mobileAppFunctionText}>{title}</span>
    </div>
  );
};

export default MobileAppFunction;
