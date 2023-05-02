import { SiVisualstudiocode } from "react-icons/si";
import { BsFillCircleFill } from "react-icons/bs";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.container}>
      <ul className={styles.menu}>
        <SiVisualstudiocode className={styles.vscodeIcon} />
        <li>File</li>
        <li>Edit</li>
        <li>View</li>
        <li>Go</li>
        <li>Run</li>
        <li>Terminal</li>
        <li>Help</li>
      </ul>

      <p>Jonghwan Jang - Visual Studio Code</p>

      <ul className={styles.circle}>
        <li>
          <BsFillCircleFill />
        </li>
        <li>
          <BsFillCircleFill />
        </li>
        <li>
          <BsFillCircleFill />
        </li>
      </ul>
    </div>
  );
}

export default Header;
