import { groq } from "next-sanity";
import { getClient, usePreviewSubscription } from "../../utils/sanity";
import Posts from "../../components/Posts";
import React from "react";

const query = groq`*[_type == "blog"][0]`;

const postsQuery = groq`*[_type == "post"]`;

function BlogPage(props) {
  const { blogData, postData, preview } = props;

  const { data } = usePreviewSubscription(query, {
    initialData: blogData ?? "",
    enabled: true,
  });

  const { data: prod } = usePreviewSubscription(postsQuery, {
    initialData: postData,
    enabled: true,
  });

  const { title } = data;

  return (
    <div>
      <h1>{title}</h1>
      <div>
        <Posts posts={prod} />
      </div>
    </div>
  );
}

export async function getStaticProps({ params = {}, preview = false }) {
  const blogData = await getClient(preview).fetch(query);
  const postData = await getClient(preview).fetch(postsQuery);

  return {
    props: {
      preview,
      blogData,
      postData,
    },
  };
}

export default BlogPage;
