import React from "react";
import styles from "./Social.module.scss";
import { urlFor } from "../../utils/sanity";

const Social = ({ footerSocialsArr }) => {
  console.log(footerSocialsArr);
  const socialLinks = footerSocialsArr.map((item, index) => {
    const { socialIcon, socialLink, socialTitle } = item;

    return (
      <li className={styles.socialItem} key={index}>
        <a href={socialLink.current}>
          <img
            loading="lazy"
            style={{ width: 24 }}
            src={urlFor(socialIcon)}
            alt={socialTitle}
          />
        </a>
      </li>
    );
  });

  return <ul className={styles.social}>{socialLinks}</ul>;
};
export default Social;
