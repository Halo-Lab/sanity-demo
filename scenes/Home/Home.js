import s from "./Home.module.scss";
import { urlFor } from "../../utils/sanity";
import Hero from "./components/Hero/Hero";
import Partners from "./components/Partners/Partners";
import Benefits from "./components/Benefits/Benefits";
import Stats from "./components/Stats/Stats";
import MobileApp from "./components/MobileApp/MobileApp";
import Testimonials from "./components/Testimonials/Testimonials";
import Conversion from "./components/Conversion/Conversion";

const Home = ({ data }) => {
  return (
    <div className="homepage">
      <Hero data={data} />
      <Partners data={data} />
      <Benefits data={data} />
      <Stats data={data} />
      <MobileApp data={data} />
      <Testimonials data={data} />
      <Conversion data={data} />
    </div>
  );
};

export default Home;
