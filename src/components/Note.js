import styles from "./Note.module.css";

function Note({ children }) {
  return (
    <div className={styles.note}>
      <div className={styles.circleWrap}>
        <span className={styles.circle} />
        <span className={styles.circle} />
        <span className={styles.circle} />
        <span className={styles.circle} />
        <span className={styles.circle} />
      </div>
      {children}
    </div>
  );
}

export default Note;
