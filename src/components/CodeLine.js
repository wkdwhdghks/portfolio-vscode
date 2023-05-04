import styles from "./CodeLine.module.css";

function CodeLine({ children }) {
  return <div className={styles.codeline}>{children}</div>;
}

export default CodeLine;
