import Link from "next/link";

function Layout({ children }) {
  return (
    <div className="bg-white">
      <header>
        <div className="container mx-auto px-6 py-3">
          <nav className={`sm:flex sm:justify-center sm:items-center mt-4`}>
            <div className="flex flex-col sm:flex-row">
              <Link href="/">
                <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0">
                  Home
                </a>
              </Link>
              <Link href="/blog">
                <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0">
                  Blog
                </a>
              </Link>
            </div>
          </nav>
        </div>
      </header>
      <main className="my-8 p-16">{children}</main>
    </div>
  );
}

export default Layout;
