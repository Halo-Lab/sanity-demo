import React from "react";
import styles from "./BlogHero.module.scss";
import ButtonPrimary from "../../../../components/Buttons/ButtonPrimary/ButtonPrimary";
import ArrowIcon from "../../../../assets/ArrowIcon";
import { urlFor } from "../../../../utils/sanity";
const BlogHero = ({ data }) => {
  const { description, mainImage, title, buttonObj } = data.blogHero;
  const { buttonLink, buttonTitle } = buttonObj;
  return (
    <div className="hero">
      <div className="container">
        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>{title}</h1>
            <p className={styles.heroSubtitle}>{description}</p>
            <ButtonPrimary
              buttonLink={buttonLink}
              buttonText={buttonTitle}
              mod="button--regular"
              Icon={ArrowIcon}
            />
          </div>
          <div className={styles.heroImage}>
            <img
              className="heroImg"
              src={urlFor(mainImage)}
              alt={mainImage.alt}
              loading="eager"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHero;
