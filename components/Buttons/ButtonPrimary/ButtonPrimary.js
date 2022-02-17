import s from "./ButtonPrimary.module.scss";
import classnames from "classnames";

const ButtonPrimary = ({ buttonLink, buttonText, mod, Icon }) => {
  return (
    <a
      href={buttonLink}
      className={classnames("button", { [mod]: mod })}
      rel="nofollow"
    >
      <div className="button-wrapper">
        {buttonText}
        {Icon && <Icon />}
      </div>
    </a>
  );
};

export default ButtonPrimary;
