import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai";
import { RiCss3Fill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { VscJson } from "react-icons/vsc";
import { AiFillExclamationCircle } from "react-icons/ai";
import styles from "./Sidebar.module.css";

const icons = [
  FaReact,
  AiFillHtml5,
  RiCss3Fill,
  IoLogoJavascript,
  VscJson,
  AiFillExclamationCircle,
];

const menus = [
  {
    id: 1,
    item: "home.jsx",
    color: "#00bcd4",
  },
  {
    id: 2,
    item: "about.html",
    color: "#e44d26",
  },
  {
    id: 3,
    item: "contact.css",
    color: "#42a5f5",
  },
  {
    id: 4,
    item: "projects.js",
    color: "#ffca28",
  },
  {
    id: 5,
    item: "blog.json",
    color: "#fbc02d",
  },
  {
    id: 6,
    item: "README.md",
    color: "#3f9de9",
  },
];

function Sidebar() {
  const [toggle, setToggle] = useState(true);

  const handleClick = () => setToggle(!toggle);

  return (
    <div className={styles.container}>
      <p className={styles.title}>EXPLORER</p>

      <div className={styles.dropDown} onClick={handleClick}>
        <IoIosArrowDown
          className={toggle ? styles.arrowDown : styles.arrowRight}
        />
        <span>PORTFOLIO</span>
      </div>

      {toggle &&
        menus.map((menu, index) => {
          const Icon = icons[index];
          return (
            <div className={styles.menu}>
              <Icon style={{ color: menu.color }} className={styles.icon} />
              <span>{menu.item}</span>
            </div>
          );
        })}
    </div>
  );
}

export default Sidebar;
