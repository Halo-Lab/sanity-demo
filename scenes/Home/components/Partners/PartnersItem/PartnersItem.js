import React from "react";
import s from "./PartnersItem.module.scss";
import urlFor from "../../../../../utils/sanity";

const PartnersItem = ({ data, key }) => {
  const { partnerTitle } = data;
  const { partnerIcon } = data;
  console.log(partnerIcon);

  return (
    <div className={s.partnersItem} key={key}>
      {partnerTitle}
      <img
        // src={urlFor(partnerIcon)
        //   .auto("format")
        //   .fit("crop")
        //   .width(1920)
        //   .quality(100)}
        //  src={urlFor(partnerIcon)}
        alt={partnerTitle}
      />
    </div>
  );
};

export default PartnersItem;
