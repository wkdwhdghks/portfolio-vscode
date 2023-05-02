import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai";
import { RiCss3Fill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { VscJson } from "react-icons/vsc";
import { AiFillExclamationCircle } from "react-icons/ai";
import styles from "./Sidebar.module.css";

function Sidebar() {
  const [toggle, setToggle] = useState(true);
  const [className, setClassName] = useState(false);

  const handleClick = () => setToggle(!toggle);
  const handleClassToggle = () => setClassName(!className);

  return (
    <div className={styles.container}>
      <p className={styles.p}>EXPLORER</p>

      <div className={styles.arrowContainer} onClick={handleClick}>
        <IoIosArrowDown className={toggle ? styles.arrow : styles.null} />
        <span>PORTFOLIO</span>
      </div>

      {toggle && (
        <div>
          <div
            className={`${styles.menuContainer} ${className ? "" : styles.a}`}
          >
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
          <div className={styles.menuContainer}>
            <AiFillExclamationCircle className={styles.readme} />
            <p>README.md</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
