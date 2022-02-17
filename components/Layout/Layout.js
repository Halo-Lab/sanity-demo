import s from "./Layout.module.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Layout({ children }) {
  const { LayoutData } = children.props;
  return (
    <div>
      <Header LayoutData={LayoutData} />
      <main className="main2">{children}</main>
      <Footer LayoutData={LayoutData} />
    </div>
  );
}

export default Layout;
