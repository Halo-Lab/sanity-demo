import { groq } from "next-sanity";
import { getClient, usePreviewSubscription } from "../../utils/sanity";
// import Posts from "../../components/Posts";
import React from "react";
import Blog from "../../scenes/Blog/Blog";

const query = groq`*[_type == "blogNew"][0]`;
const querySiteConfig = groq`*[_type=="siteConfig"][0]`;

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

  return (
    <div>
      <Blog data={data} postData={postData} />
    </div>
  );
}

export async function getStaticProps({ params = {}, preview = false }) {
  const blogData = await getClient(preview).fetch(query);
  const postData = await getClient(preview).fetch(postsQuery);
  const LayoutData = await getClient(preview).fetch(querySiteConfig);

  return {
    props: {
      preview,
      blogData,
      postData,
      LayoutData,
    },
  };
}

export default BlogPage;
