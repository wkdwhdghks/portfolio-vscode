import { VscError, VscWarning, VscCheck, VscBell } from "react-icons/vsc";
import { IoIosGitBranch } from "react-icons/io";
import { VscBroadcast } from "react-icons/vsc";
import styles from "./Footer.module.css";

const leftIcons = [IoIosGitBranch, VscError, VscWarning];
const rightIcons = [VscBroadcast, VscCheck];

const leftItems = [
  {
    item: "main",
  },
  {
    item: "0",
  },
  {
    item: "0",
  },
];

const rightItems = [
  {
    item: "Go Live",
  },
  {
    item: "Prettier",
  },
];

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        {leftItems.map((item, index) => {
          const Icon = leftIcons[index];
          return (
            <div className={styles.leftItemContainer}>
              <Icon className={styles.icon} />
              {item.item}
            </div>
          );
        })}
      </div>

      <div className={styles.rightContainer}>
        {rightItems.map((item, index) => {
          const Icon = rightIcons[index];
          return (
            <div className={styles.rightItemContainer}>
              <Icon className={styles.icon} />
              {item.item}
            </div>
          );
        })}
        <div className={styles.bellContainer}>
          <VscBell className={styles.bell} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
