import "../styles/index.scss";
import Layout from "../components/Layout/Layout";
import Head from "next/head";
import { groq } from "next-sanity";
import { getClient } from "../utils/sanity";

MyApp.getInitialProps = async () => {
  const querySiteConfig = groq`*[_type=="siteConfig"][0]`;
  const LayoutData = await getClient().fetch(querySiteConfig);
  return { siteconfig: LayoutData };
};

function MyApp({ Component, pageProps, siteconfig }) {
  return (
    <>
      <Head className="head">
        <link rel="icon" href="/favicon.svg" type="image/svg+xml"></link>
        <title>Sanity-Demo</title>
      </Head>
      <Layout siteconfig={siteconfig}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
