import s from "./ButtonPrimary.module.scss";

const ButtonPrimary = ({
  buttonText,
  buttonLink = "https://www.halo-lab.com/",
}) => {
  return (
    <a href={buttonLink} className={s.button} rel="nofollow">
      <div className={s.buttonWrapper}>{buttonText}</div>
    </a>
  );
};

export default ButtonPrimary;
