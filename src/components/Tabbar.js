import { FaReact } from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai";
import { RiCss3Fill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { VscJson } from "react-icons/vsc";
import styles from "./Tabbar.module.css";

function Tabbar() {
  return (
    <div className={styles.container}>
      <div className={styles.menuContainer}>
        <FaReact className={styles.react} />
        <p>home.jsx</p>
      </div>
      <div className={styles.menuContainer}>
        <AiFillHtml5 className={styles.html} />
        <p>about.html</p>
      </div>
      <div className={styles.menuContainer}>
        <RiCss3Fill className={styles.css} />
        <p>contact.css</p>
      </div>
      <div className={styles.menuContainer}>
        <IoLogoJavascript className={styles.js} />
        <p>projects.js</p>
      </div>
      <div className={styles.menuContainer}>
        <VscJson className={styles.json} />
        <p>blog.json</p>
      </div>
    </div>
  );
}

export default Tabbar;
