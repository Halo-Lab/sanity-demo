import styles from "./Home.module.scss";
import { urlFor } from "../../utils/sanity";

const Home = ({ data }) => {
  const { hero, about } = data;

  return (
    <div className={styles.wrapper}>
      <section className="hero">
        <h1>{hero.title}</h1>

        <img
          src={urlFor(hero.mainImage)
            .auto("format")
            .fit("crop")
            .width(1920)
            .quality(80)}
        />
      </section>
      <section className="about">
        <h2>{about.title}</h2>
        <p>{about.description}</p>
        <img src={urlFor(about.image).auto("format").width(1920)} />
      </section>
    </div>
  );
};

export default Home;
