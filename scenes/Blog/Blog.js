import BlogHero from "./components/blogHero/BlogHero";
import LatestPosts from "./components/LatestPosts/LatestPosts";
import Conversion from "../Home/components/Conversion/Conversion";
import styles from "./Blog.module.scss";

const Blog = ({ data, postData, homeData }) => {
  return (
    <div className={styles.wrapper}>
      <BlogHero data={data} postData={postData} />
      <LatestPosts data={data} postData={postData} />
      <Conversion data={homeData} />
    </div>
  );
};

export default Blog;
