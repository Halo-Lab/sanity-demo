import { groq } from "next-sanity";
import { getClient, usePreviewSubscription, urlFor } from "../../utils/sanity";
import BlockContent from "@sanity/block-content-to-react";
import Post from "../../scenes/Post/Post";

const query = groq`*[_type == "post" && slug.current == $slug][0]`;
const queryBlog = groq`*[_type == "blogNew"][0]`;
const postsQuery = groq`*[_type == "post"]`;
const querySiteConfig = groq`*[_type=="siteConfig"][0]`;

function PostPage({ postData, blogData, allPostData, preview }) {
  const { data: post = {} } = usePreviewSubscription(query, {
    params: { slug: postData?.slug?.current },
    initialData: postData,
    enabled: true,
  });

  const { data } = usePreviewSubscription(queryBlog, {
    initialData: blogData ?? "",
    enabled: true,
  });
  const { data: prod } = usePreviewSubscription(postsQuery, {
    initialData: allPostData,
    enabled: true,
  });

  return (
    <div>
      <Post post={post} data={data} allPostData={allPostData} />
    </div>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const postData = await getClient(preview).fetch(query, {
    slug: params.slug,
  });

  const allPostData = await getClient(preview).fetch(postsQuery);
  const blogData = await getClient(preview).fetch(queryBlog);
  const LayoutData = await getClient(preview).fetch(querySiteConfig);

  return {
    props: { preview, postData, LayoutData, blogData, allPostData },
  };
}

export async function getStaticPaths() {
  const paths = await getClient().fetch(
    `*[_type == "post" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}

export default PostPage;
