import s from "./Hero.module.scss";
import ButtonPrimary from "../../../components/Buttons/ButtonPrimary/ButtonPrimary";
import ButtonWithArrow from "../../../components/Buttons/ButtonWithArrow/ButtonWithArrow";

const Hero = ({ data, urlFor }) => {
  const { hero } = data;

  return (
    <div className={s.container}>
      <section className={s.heroContent}>
        <div className={s.heroBlock}>
          <h1 className={s.title}>{hero.title}</h1>
          <p className={s.description}>{hero.description}</p>
          <div className={s.buttonBlock}>
            <ButtonPrimary buttonText={"Lets start"} />
            <ButtonWithArrow buttonText={"About app"} />
          </div>
        </div>
        <div className={s.pictureBlock}>
          <img
            src={urlFor(hero.mainImage)
              .auto("format")
              .fit("crop")
              .width(1920)
              .quality(100)}
            alt={hero.mainImage.alt}
          />
        </div>
      </section>
    </div>
  );
};

export default Hero;
