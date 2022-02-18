import BlogHero from "./components/blogHero/BlogHero";
import LatestPosts from "./components/LatestPosts/LatestPosts";
import Conversion from "../Home/components/Conversion/Conversion";

const Blog = ({ data, postData }) => {
  return (
    <div className="blogpage">
      <BlogHero data={data} />
      <LatestPosts data={data} postData={postData} />
      <Conversion data={data} />
    </div>
  );
};

export default Blog;
