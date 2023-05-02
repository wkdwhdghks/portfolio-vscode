import { Outlet } from "react-router-dom";
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import styels from "./Layout.module.css";

function Layout() {
  return (
    <div>
      <Header />
      <div className={styels.container}>
        <Nav />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
