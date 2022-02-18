import React from "react";

import styles from "./LatestPosts.module.scss";
import PostCard from "./PostCard/PostCard";

const renderPosts = (postData) => {
  const postsList = postData.map((item, index) => {
    return <PostCard key={index} post={item} />;
  });

  return postsList;
};

const recommendedPost = (posts, pageType) => {
  if (pageType == "recommended") {
    const recPosts = posts.slice(0, 3);
    return renderPosts(recPosts);
  }
  return renderPosts(posts);
};

const LatestPosts = ({ postData, recommended = {}, pageType }) => {
  const { recommendedObj } = recommended;
  return (
    <div className={styles.posts}>
      <div className="container">
        {pageType && (
          <div className={styles.recommend_head}>
            <p className="section-category">{recommendedObj.recCategory}</p>
            <h2 className="section-title">{recommendedObj.recTitle}</h2>
          </div>
        )}
        <div className={styles.postsInner}>
          {recommendedPost(postData, pageType)}
        </div>
      </div>
    </div>
  );
};

export default LatestPosts;
