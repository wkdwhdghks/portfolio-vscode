import { FaReact } from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai";
import { RiCss3Fill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { VscJson } from "react-icons/vsc";
import styles from "./Tabbar.module.css";
import { Link } from "react-router-dom";

const icons = [FaReact, AiFillHtml5, RiCss3Fill, IoLogoJavascript, VscJson];
const items = [
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
];

function Tabbar({ select, handleClick }) {
  return (
    <div className={styles.container}>
      {items.map((item, index) => {
        const Icon = icons[index];
        return (
          <Link to={item.path} key={item.id}>
            <div
              className={`${styles.menuContainer} ${
                select === item.path ? styles.select : ""
              }`}
              onClick={() => handleClick(item.path)}
            >
              <Icon style={{ color: item.color }} className={styles.icon} />
              {item.item}
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default Tabbar;
