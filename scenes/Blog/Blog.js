import BlogHero from "./components/blogHero/BlogHero";
import LatestPosts from "./components/LatestPosts/LatestPosts";
import Conversion from "../Home/components/Conversion/Conversion";
import styles from "./Blog.module.scss";

const Blog = ({ data, postData }) => {
  return (
    <div className={styles.wrapper}>
      <BlogHero data={data} />
      <LatestPosts data={data} postData={postData} />
      <Conversion data={data} />
    </div>
  );
};

export default Blog;
