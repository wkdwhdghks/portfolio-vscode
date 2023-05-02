import { Outlet } from "react-router-dom";
import Header from "./Header";
import Nav from "./Nav";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Tabbar from "./Tabbar";
import styles from "./Layout.module.css";

function Layout() {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <Nav />
        <Sidebar />
        <div>
          <Tabbar />
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
