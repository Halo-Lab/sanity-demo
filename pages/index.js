import Error from "next/error";
import { groq } from "next-sanity";
import { useRouter } from "next/router";
import { getClient, usePreviewSubscription, urlFor } from "../utils/sanity";

const query = groq`*[_type == "home"][0]
`;

function IndexPage(props) {
  const { productsData, preview } = props;
  const router = useRouter();

  if (!router.isFallback && !productsData) {
    return <Error statusCode={404} />;
  }
  const { data } = usePreviewSubscription(query, {
    initialData: productsData,
    enabled: preview || router.query.preview !== null,
  });

  const { hero, about } = data;

  return (
    <div className="my-8">
      <section>
        <h1>{hero.title}</h1>

        <img
          src={urlFor(hero.mainImage)
            .auto("format")
            .fit("crop")
            .width(1920)
            .quality(80)}
        />
      </section>
      <section>
        <h2>{about.title}</h2>
        <p>{about.description}</p>
        <img src={urlFor(about.image).auto("format").width(1920)} />
      </section>
    </div>
  );
}

export async function getStaticProps({ params = {}, preview = false }) {
  const productsData = await getClient(preview).fetch(query);

  return {
    props: {
      preview,
      productsData,
    },
  };
}

export default IndexPage;
