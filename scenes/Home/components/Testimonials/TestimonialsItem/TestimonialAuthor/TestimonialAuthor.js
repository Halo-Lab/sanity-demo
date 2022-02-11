import React from 'react';
import { object, string } from 'prop-types';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import styles from './TestimonialAuthor.module.scss';

const TestimonialAuthor = ({ name, position, avatarImg, avatarAlt }) => {
  return (
    <div className={styles.testimonialAuthor}>
      <div className={styles.testimonialAuthorImg}>
        <GatsbyImage
          image={getImage(avatarImg)}
          imgStyle={{ objectFit: 'contain' }}
          style={{ width: '64px', height: '64px' }}
          alt={avatarAlt}
        />
      </div>
      <div className={styles.testimonialAuthorInfo}>
        <span className={styles.testimonialAuthorName}>{name}</span>
        <span className={styles.testimonialAuthorPosition}>{position}</span>
      </div>
    </div>
  );
};

TestimonialAuthor.propTypes = {
  name: string,
  position: string,
  avatarImg: object,
  avatarAlt: string,
};

export default TestimonialAuthor;
