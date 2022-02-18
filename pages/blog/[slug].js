import { groq } from "next-sanity";
import { getClient, usePreviewSubscription, urlFor } from "../../utils/sanity";
import BlockContent from "@sanity/block-content-to-react";
import Post from "../../scenes/Post/Post";

const query = groq`*[_type == "post" && slug.current == $slug][0]`;
const queryBlog = groq`*[_type == "blogNew"][0]`;
const querySiteConfig = groq`*[_type=="siteConfig"][0]`;

function PostPage({ postData, blogData, preview }) {
  const { data: post = {} } = usePreviewSubscription(query, {
    params: { slug: postData?.slug?.current },
    initialData: postData,
    enabled: true,
  });

  const { data } = usePreviewSubscription(queryBlog, {
    initialData: blogData ?? "",
    enabled: true,
  });

  return (
    <div>
      <Post post={post} data={data} />
    </div>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const postData = await getClient(preview).fetch(query, {
    slug: params.slug,
  });

  const blogData = await getClient(preview).fetch(queryBlog);
  const LayoutData = await getClient(preview).fetch(querySiteConfig);

  return {
    props: { preview, postData, LayoutData, blogData },
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
