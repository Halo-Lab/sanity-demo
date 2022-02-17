import BlogHero from "./components/blogHero/BlogHero";
const Blog = ({ data }) => {
  return (
    <div className="blogpage">
      <BlogHero data={data} />
    </div>
  );
};

export default Blog;
