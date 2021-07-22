import Link from "next/link";

function Layout({ children }) {
  return (
    <div>
      <header className="header">
        <div>
          <nav>
            <div>
              <Link href="/">
                <a>Home</a>
              </Link>
              <Link href="/blog">
                <a>Blog</a>
              </Link>
            </div>
          </nav>
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
}

export default Layout;
