import "../styles/index.scss";
import Layout from "../components/Layout/Layout";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head className="head">
        <link rel="icon" href="/favicon.svg" type="image/svg+xml"></link>
        <title>Sanity-Demo</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
