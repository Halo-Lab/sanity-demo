import s from "./Layout.module.scss";
import Header from "../Header/Header";

function Layout({ children }) {
  const { LayoutData } = children.props;
  return (
    <div>
      <Header LayoutData={LayoutData}></Header>
      <main className="main2">{children}</main>
    </div>
  );
}

export default Layout;
