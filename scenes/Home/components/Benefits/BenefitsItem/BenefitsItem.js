import React from "react";
import s from "./BenefitsItem.module.scss";
import { urlFor } from "../../../../../utils/sanity";
import ButtonWithArrow from "../../../../../components/Buttons/ButtonWithArrow/ButtonWithArrow";

const BenefitsItem = ({ data, key }) => {
  const { benefitTitle, benefitDescription, benefitIcon, benefitButtonText } =
    data;

  return (
    <div className={s.benefitsItem} key={key}>
      <img className={s.img} src={urlFor(benefitIcon)} alt={benefitTitle} />
      <h3 className={s.benefitsItemTitle}>{benefitTitle}</h3>
      <p className={s.benefitsItemDesc}>{benefitDescription}</p>
      <ButtonWithArrow buttonText={benefitButtonText} />
    </div>
  );
};

export default BenefitsItem;
