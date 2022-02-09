import Link from "next/link";
import Logo from "../../assets/logo";
import s from "./Header.module.scss";

const Header = () => {
  return (
    <header className={s.header}>
      <div className="container">
        <div className={s.headerWrap}>
          <Link href="/">
            <a className={s.logo}>
              <Logo />
            </a>
          </Link>
          <div className={s.headerRight}>
            <div className={s.menu}>
              <Link href="/about">
                <a className={s.menuLink}>About us</a>
              </Link>
              <Link href="/blog">
                <a className={s.menuLink}>Blog</a>
              </Link>
              <Link href="/signIn">
                <a className={s.button} rel="nofollow">
                  <div className={s.buttonWrapper}>Sign In</div>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
