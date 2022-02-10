import s from "./Home.module.scss";
import { urlFor } from "../../utils/sanity";
import Hero from "./components/Hero/Hero";
import Partners from "./components/Partners/Partners";

const Home = ({ data }) => {
  // const { hero, about } = data;

  return (
    <div className={s.container}>
      <Hero data={data} urlFor={urlFor} />
      <Partners data={data} />
      {/* <section className="about">
        <h2>{about.title}</h2>
        <p>{about.description}</p>
        <img src={urlFor(about.image).auto("format").width(1920)} />
      </section> */}
    </div>
  );
};

export default Home;
