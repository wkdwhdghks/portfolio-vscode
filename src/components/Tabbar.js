import { FaReact } from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai";
import { RiCss3Fill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { VscJson } from "react-icons/vsc";
import styles from "./Tabbar.module.css";

const icons = [FaReact, AiFillHtml5, RiCss3Fill, IoLogoJavascript, VscJson];
const items = [
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
];

function Tabbar() {
  return (
    <div className={styles.container}>
      {items.map((item, index) => {
        const Icon = icons[index];
        return (
          <div key={item.id} className={styles.menuContainer}>
            <Icon style={{ color: item.color }} className={styles.icon} />
            {item.item}
          </div>
        );
      })}
    </div>
  );
}

export default Tabbar;
