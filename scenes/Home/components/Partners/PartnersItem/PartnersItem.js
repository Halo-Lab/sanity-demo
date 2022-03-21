import React from "react";
import s from "./PartnersItem.module.scss";
import { urlFor } from "../../../../../utils/sanity";

const PartnersItem = ({ data }) => {
  const { partnerTitle } = data;
  const { partnerIcon } = data;

  return (
    <div className={s.partnersItem}>
      <img className={s.img} src={urlFor(partnerIcon)} alt={partnerTitle} />
    </div>
  );
};

export default PartnersItem;
