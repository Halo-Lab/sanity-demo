import React from "react";
import s from "./TestimonialsItem.module.scss";
import { urlFor } from "../../../../../utils/sanity";

const TestimonialsItem = ({ data, key }) => {
  const { icon, title } = data;

  return <div className={s.mobileAppFunction} key={key}></div>;
};

export default TestimonialsItem;
