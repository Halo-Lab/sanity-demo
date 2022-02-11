import s from "./Home.module.scss";
import { urlFor } from "../../utils/sanity";
import Hero from "./components/Hero/Hero";
import Partners from "./components/Partners/Partners";
import Benefits from "./components/Benefits/Benefits";
import Stats from "./components/Stats/Stats";

const Home = ({ data }) => {
  return (
    <div className={s.container}>
      <Hero data={data} />
      <Partners data={data} />
      <Benefits data={data} />
      <Stats data={data} />
    </div>
  );
};

export default Home;
