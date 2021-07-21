import PostCard from "./PostCard";

function Posts({ posts }) {
  return (
    <div className="container mx-auto px-6">
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
        {posts?.map((post) => (
          <PostCard key={post._id} {...post} />
        ))}
      </div>
    </div>
  );
}

export default Posts;
