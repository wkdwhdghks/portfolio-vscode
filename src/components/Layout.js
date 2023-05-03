import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Nav from "./Nav";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Tabbar from "./Tabbar";
import styles from "./Layout.module.css";

function Layout() {
  const [select, setSelect] = useState("");

  const handleClick = (path) => {
    setSelect(path);
    localStorage.setItem("path", path);
  };

  useEffect(() => {
    setSelect(localStorage.getItem("path"));
  }, []);

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <Nav select={select} handleClick={handleClick} />
        <Sidebar select={select} handleClick={handleClick} />
        <div>
          <Tabbar select={select} handleClick={handleClick} />
          <Outlet context={{ handleClick }} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
