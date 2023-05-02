import {
  VscFiles,
  VscCode,
  VscEdit,
  VscMail,
  VscExtensions,
  VscAccount,
  VscSettingsGear,
} from "react-icons/vsc";
import styles from "./Nav.module.css";

function Nav() {
  return (
    <nav className={styles.container}>
      <div className={styles.menuTop}>
        <VscFiles className={styles.icon} />
        <VscCode className={styles.icon} />
        <VscEdit className={styles.icon} />
        <VscMail className={styles.icon} />
        <VscExtensions className={styles.icon} />
      </div>

      <div className={styles.menuBottom}>
        <VscAccount className={styles.icon} />
        <VscSettingsGear className={styles.icon} />
      </div>
    </nav>
  );
}

export default Nav;
