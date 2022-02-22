import React from "react";
import styles from "./LatestPosts.module.scss";
import PostCard from "./PostCard/PostCard";
import { useMediaQuery } from "react-responsive";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

SwiperCore.use([Pagination]);

const renderPosts = (postData) => {
  const postsList = postData.map((item, index) => {
    return <PostCard key={index} post={item} />;
  });

  return postsList;
};

const renderSwiperPosts = (postData) => {
  const postsList = postData.map((item, index) => {
    return (
      <SwiperSlide>
        <PostCard key={index} post={item} />
      </SwiperSlide>
    );
  });

  return postsList;
};

const recommendedPost = (posts, pageType) => {
  const isMobile = useMediaQuery({ query: "(max-width: 754px)" });

  const sliderParams = {
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 16,
  };

  if (pageType == "recommended") {
    const recPosts = posts.slice(0, 3);
    if (isMobile) {
      return (
        <Swiper
          {...sliderParams}
          pagination={{ clickable: true }}
          className={styles.postsSlider}
        >
          {renderSwiperPosts(recPosts)}
        </Swiper>
      );
    }
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
