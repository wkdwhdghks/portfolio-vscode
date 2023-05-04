import styles from "./TagContents.module.css";

function TagContents({ indent, children }) {
  return (
    <div
      className={styles.tag_contents}
      style={{ paddingLeft: `${indent * 0.5}em` }}
    >
      {children}
    </div>
  );
}

export default TagContents;
