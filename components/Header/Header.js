import Link from "next/link";
import Logo from "../../assets/logo";
import s from "./Header.module.scss";

const Header = () => {
  return (
    <header className={s.header}>
      <div>
        <nav className={s.navigation}>
          <Link href="/">
            <a>
              <div className={s.logo}>
                <Logo />
              </div>
            </a>
          </Link>
          <div className={s.navRight}>
            <Link href="/about">
              <a>About us</a>
            </Link>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
            <Link href="/signIn">
              <a>
                <div>Sign in</div>
              </a>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
