import {
  VscFiles,
  VscCode,
  VscEdit,
  VscMail,
  VscExtensions,
  VscAccount,
  VscSettingsGear,
} from "react-icons/vsc";
import { Link } from "react-router-dom";
import styles from "./Nav.module.css";

const navTop = [
  {
    icon: VscFiles,
    path: "/",
  },
  {
    icon: VscCode,
    path: "/projects",
  },
  {
    icon: VscEdit,
    path: "/blog",
  },
  {
    icon: VscMail,
    path: "/contact",
  },
  {
    icon: VscExtensions,
    path: "/readme",
  },
];

const navBottom = [
  {
    icon: VscAccount,
    path: "/about",
  },
  {
    icon: VscSettingsGear,
    path: "/setting",
  },
];

function Nav({ select, handleClick }) {
  return (
    <nav className={styles.container}>
      <div className={styles.menuTop}>
        {navTop.map((item, index) => (
          <Link to={item.path} key={index}>
            <item.icon
              className={`${styles.icon} ${
                select === item.path ? styles.select : ""
              }`}
              onClick={() => handleClick(item.path)}
            />
          </Link>
        ))}
      </div>

      <div className={styles.menuBottom}>
        {navBottom.map((item, index) => (
          <Link to={item.path} key={index}>
            <item.icon
              className={`${styles.icon} ${
                select === item.path ? styles.select : ""
              }`}
              onClick={() => handleClick(item.path)}
            />
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Nav;
