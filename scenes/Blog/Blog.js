import BlogHero from "./components/blogHero/BlogHero";
import LatestPosts from "./components/LatestPosts/LatestPosts";
const Blog = ({ data, postData }) => {
  console.log();
  return (
    <div className="blogpage">
      <BlogHero data={data} />
      <LatestPosts data={data} postData={postData} />
    </div>
  );
};

export default Blog;
