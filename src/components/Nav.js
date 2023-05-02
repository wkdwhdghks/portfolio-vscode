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

const iconsTop = [VscFiles, VscCode, VscEdit, VscMail, VscExtensions];
const iconsBottom = [VscAccount, VscSettingsGear];

function Nav() {
  return (
    <nav className={styles.container}>
      <div className={styles.menuTop}>
        {iconsTop.map((item, index) => {
          const Icon = iconsTop[index];
          return <Icon key={index} className={styles.icon} />;
        })}
      </div>

      <div className={styles.menuBottom}>
        {iconsBottom.map((item, index) => {
          const Icon = iconsBottom[index];
          return <Icon key={index} className={styles.icon} />;
        })}
      </div>
    </nav>
  );
}

export default Nav;
