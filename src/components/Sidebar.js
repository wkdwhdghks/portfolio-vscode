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
    id: 0,
    item: "home.jsx",
    color: "#00bcd4",
  },
  {
    id: 1,
    item: "about.html",
    color: "#e44d26",
  },
  {
    id: 2,
    item: "contact.css",
    color: "#42a5f5",
  },
  {
    id: 3,
    item: "projects.js",
    color: "#ffca28",
  },
  {
    id: 4,
    item: "blog.json",
    color: "#fbc02d",
  },
  {
    id: 5,
    item: "README.md",
    color: "#3f9de9",
  },
];

function Sidebar() {
  const [dropDownToggle, setDropDownToggle] = useState(true);
  const [select, setSelect] = useState("");

  const handleDropDownClick = () => setDropDownToggle(!dropDownToggle);
  const handleMenuClick = (id) => setSelect(id);

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
            <div
              key={index}
              className={`${styles.menu} ${
                select === menu.id ? styles.active : ""
              }`}
              onClick={() => handleMenuClick(menu.id)}
            >
              <Icon style={{ color: menu.color }} className={styles.icon} />
              <span>{menu.item}</span>
            </div>
          );
        })}
    </div>
  );
}

export default Sidebar;
