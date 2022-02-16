import "../styles/index.scss";
import Layout from "../components/Layout/Layout";

function MyApp({ Component, pageProps }) {
  // const { LayoutData } = pageProps;
  // console.log(LayoutData);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
