import { VscError, VscWarning, VscCheck, VscBell } from "react-icons/vsc";
import { IoIosGitBranch } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <div className={styles.gitContainer}>
          <IoIosGitBranch className={styles.git} />
          <p>main</p>
        </div>
        <div className={styles.errorContainer}>
          <VscError className={styles.error} />
          <p>0</p>
        </div>
        <div className={styles.warningContainer}>
          <VscWarning className={styles.warning} />
          <p>0</p>
        </div>
      </div>

      <div className={styles.rightContainer}>
        <div className={styles.reactContainer}>
          <FaReact className={styles.react} />
          <p>Powered by React.js</p>
        </div>
        <div className={styles.prettierContainer}>
          <VscCheck className={styles.prettier} />
          <p>Prettier</p>
        </div>
        <div className={styles.bellContainer}>
          <VscBell className={styles.bell} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
