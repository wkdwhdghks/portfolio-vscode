import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai";
import { RiCss3Fill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { VscJson } from "react-icons/vsc";
import { AiFillExclamationCircle } from "react-icons/ai";
import styles from "./Sidebar.module.css";
import { Link } from "react-router-dom";

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
    id: 0,
    item: "home.jsx",
    color: "#00bcd4",
    path: "/",
  },
  {
    id: 1,
    item: "about.html",
    color: "#e44d26",
    path: "/about",
  },
  {
    id: 2,
    item: "contact.css",
    color: "#42a5f5",
    path: "/contact",
  },
  {
    id: 3,
    item: "projects.js",
    color: "#ffca28",
    path: "/projects",
  },
  {
    id: 4,
    item: "blog.json",
    color: "#fbc02d",
    path: "/blog",
  },
  {
    id: 5,
    item: "README.md",
    color: "#3f9de9",
    path: "/readme",
  },
];

function Sidebar({ select, handleClick }) {
  const [dropDownToggle, setDropDownToggle] = useState(true);

  const handleDropDownClick = () => setDropDownToggle(!dropDownToggle);

  return (
    <div className={styles.container}>
      <p className={styles.title}>EXPLORER</p>
      <div className={styles.dropDown} onClick={handleDropDownClick}>
        <IoIosArrowDown
          className={dropDownToggle ? styles.arrowDown : styles.arrowRight}
        />
        <span>PORTFOLIO</span>
      </div>

      {dropDownToggle &&
        menus.map((menu, index) => {
          const Icon = icons[index];
          return (
            <Link to={menu.path} key={index}>
              <div
                className={`${styles.menu} ${
                  select === menu.path ? styles.select : ""
                }`}
                onClick={() => handleClick(menu.path)}
              >
                <Icon style={{ color: menu.color }} className={styles.icon} />
                <span className={styles.item}>{menu.item}</span>
              </div>
            </Link>
          );
        })}
    </div>
  );
}

export default Sidebar;
