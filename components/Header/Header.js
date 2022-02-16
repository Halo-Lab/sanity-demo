import Link from "next/link";
import styles from "./Header.module.scss";
import { urlFor } from "../../utils/sanity";
import ButtonPrimary from "../Buttons/ButtonPrimary/ButtonPrimary";
import Navigation from "./Navigation/Navigation";
import Sandwich from "./Sandwich/Sandwich";

const Header = ({ LayoutData }) => {
  const { headerLinkArr, logo, buttonObj } = LayoutData;
  const { buttonLink, buttonText } = buttonObj;
  console.log(headerLinkArr);
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerWrap}>
          <Link href="/">
            <a>
              <img className="logo" style={{ width: 192 }} src={urlFor(logo)} />
            </a>
          </Link>
          <div className={styles.headerRight}>
            <Navigation headerLinkArr={headerLinkArr} />
            <ButtonPrimary buttonLink={buttonLink} buttonText={buttonText} />
          </div>
          <Sandwich
            headerLinkArr={headerLinkArr}
            buttonLink={buttonLink}
            buttonText={buttonText}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
