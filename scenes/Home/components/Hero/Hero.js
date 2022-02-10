import s from "./Hero.module.scss";
import ButtonPrimary from "../../../../components/Buttons/ButtonPrimary/ButtonPrimary";
import ButtonWithArrow from "../../../../components/Buttons/ButtonWithArrow/ButtonWithArrow";
import { urlFor } from "../../../../utils/sanity";

const Hero = ({ data }) => {
  const { hero } = data;
  return (
    <div className="section">
      <div className={s.hero}>
        <div className={s.container}>
          <section className="container">
            <div className={s.heroContent}>
              <div className={s.heroInfo}>
                <h1 className={s.heroTitle}>{hero.title}</h1>
                <p className={s.heroDesc}>{hero.description}</p>
                <div className={s.heroFooter}>
                  <ButtonPrimary buttonText={"Lets start"} />
                  <ButtonWithArrow buttonText={"About app"} />
                </div>
              </div>
              <div className={s.video}>
                <img
                  className={s.videoImg}
                  src={urlFor(hero.mainImage)
                    .auto("format")
                    .fit("crop")
                    .width(1920)
                    .quality(100)}
                  alt={hero.mainImage.alt}
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Hero;
