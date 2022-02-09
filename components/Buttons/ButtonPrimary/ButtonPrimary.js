import s from "./ButtonPrimary.module.scss";

const ButtonPrimary = ({ buttonText }) => {
  const { url } = "https://www.halo-lab.com/";
  return (
    <a href={url} className={s.button} rel="nofollow">
      <div className={s.buttonWrapper}>{buttonText}</div>
    </a>
  );
};

export default ButtonPrimary;
