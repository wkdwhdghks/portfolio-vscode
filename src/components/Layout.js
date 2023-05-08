import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "./Header";
import Nav from "./Nav";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Tabbar from "./Tabbar";
import styles from "./Layout.module.css";

function Layout() {
  const [select, setSelect] = useState("");
  const navigate = useNavigate();

  const handleClick = (path) => {
    setSelect(path);
    localStorage.setItem("path", path);
  };

  useEffect(() => {
    if (localStorage.getItem("path") === null) {
      setSelect("/");
      navigate("/");
    } else {
      const path = localStorage.getItem("path");
      setSelect(path);
      navigate(path);
    }
  }, [navigate]);

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <Nav select={select} handleClick={handleClick} />
        <Sidebar select={select} handleClick={handleClick} />
        <div>
          <Tabbar select={select} handleClick={handleClick} />
          <div className={styles.outletContainer}>
            <Outlet context={{ handleClick }} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
