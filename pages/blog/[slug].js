import { groq } from "next-sanity";
import { getClient, usePreviewSubscription, urlFor } from "../../utils/sanity";
import BlockContent from "@sanity/block-content-to-react";

const query = groq`*[_type == "post" && slug.current == $slug][0]`;

function PostPage({ postData, preview }) {
  const { data: post = {} } = usePreviewSubscription(query, {
    params: { slug: postData?.slug?.current },
    initialData: postData,
    enabled: true,
  });

  const { title, mainImage, text } = post;
  return (
    <div>
      <h1>{title}</h1>
      <img
        src={urlFor(mainImage)
          .auto("format")
          .fit("crop")
          .width(1920)
          .quality(80)}
      />
      <BlockContent
        blocks={text}
        projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
        dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
        className="markdown"
      />
    </div>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const postData = await getClient(preview).fetch(query, {
    slug: params.slug,
  });

  return {
    props: { preview, postData },
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
