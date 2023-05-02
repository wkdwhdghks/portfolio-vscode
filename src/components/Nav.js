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
        <button>
          <VscFiles />
        </button>
        <button>
          <VscCode />
        </button>
        <button>
          <VscEdit />
        </button>
        <button>
          <VscMail />
        </button>
        <button>
          <VscExtensions />
        </button>
      </div>

      <div className={styles.menuBottom}>
        <button>
          <VscAccount />
        </button>
        <button>
          <VscSettingsGear />
        </button>
      </div>
    </nav>
  );
}

export default Nav;
