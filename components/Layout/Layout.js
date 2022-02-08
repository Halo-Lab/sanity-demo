import s from "./Layout.module.scss";
import Header from "../Header/Header";

function Layout({ children }) {
  return (
    <div>
      <Header></Header>
      <main>{children}</main>
    </div>
  );
}

export default Layout;
