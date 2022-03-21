import Hero from "./components/Hero/Hero";
import Partners from "./components/Partners/Partners";
import Benefits from "./components/Benefits/Benefits";
import Stats from "./components/Stats/Stats";
import MobileApp from "./components/MobileApp/MobileApp";
import Testimonials from "./components/Testimonials/Testimonials";
import Conversion from "./components/Conversion/Conversion";

const Home = ({ data }) => {
  const { conversion, hero, mobileApp, partners, stats, testimonials } = data;
  return (
    <div className="homepage">
      <Hero hero={hero} />
      <Partners data={data} />
      <Benefits data={data} />
      <Stats data={data} />
      <MobileApp mobileApp={mobileApp} />
      <Testimonials testimonials={testimonials} />
      <Conversion conversion={conversion} />
    </div>
  );
};

export default Home;
