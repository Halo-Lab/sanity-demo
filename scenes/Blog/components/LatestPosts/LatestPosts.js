import React from "react";

import styles from "./LatestPosts.module.scss";
import PostCard from "./PostCard/PostCard";

const renderPosts = (postData) => {
  const postsList = postData.map((item, index) => {
    return <PostCard key={index} post={item} />;
  });

  return postsList;
};

const LatestPosts = ({ data, postData }) => {
  return (
    <div className={styles.posts}>
      <div className="container">
        {/* {pageType && (
          <div className={styles.recommend_head}>
            <p className="section-category">
              {'category name'}
            </p>
            <h2 className="section-title">{'title'}</h2>
          </div>
        )} */}
        <div className={styles.postsInner}>{renderPosts(postData)}</div>
      </div>
    </div>
  );
};

export default LatestPosts;
