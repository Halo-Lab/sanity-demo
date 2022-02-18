import React from "react";

import styles from "./LatestPosts.module.scss";
import PostCard from "./PostCard/PostCard";

const renderPosts = (postData) => {
  const postsList = postData.map((item, index) => {
    return <PostCard key={index} post={item} />;
  });

  return postsList;
};

const LatestPosts = ({ postData, recommended, pageType }) => {
  return (
    <div className={styles.posts}>
      <div className="container">
        {pageType && (
          <div className={styles.recommend_head}>
            <p className="section-category">{recommended.recCategory}</p>
            <h2 className="section-title">{recommended.recTitle}</h2>
          </div>
        )}
        <div className={styles.postsInner}>{renderPosts(postData)}</div>
      </div>
    </div>
  );
};

export default LatestPosts;
