import React from 'react';
import { number } from 'prop-types';
import classnames from 'classnames';

import styles from './Rating.module.scss';

import StarIcon from '../../../../../../components/icons/StarIcon';

const Rating = ({ starsNum }) => {
  const stars = [
    { name: 'star1' },
    { name: 'star2' },
    { name: 'star3' },
    { name: 'star4' },
    { name: 'star5' },
  ];

  const ratingItems = stars.map((item, index) => (
    <StarIcon
      key={item.name}
      mod={classnames('icon icon--medium', {
        'icon--star-active': index < starsNum,
      })}
    />
  ));

  return <div className={styles.rating}>{ratingItems}</div>;
};

Rating.propTypes = {
  starsNum: number,
};

export default Rating;
