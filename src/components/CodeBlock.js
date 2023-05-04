import styles from "./CodeBlock.module.css";

const CodeBlock = ({ children }) => {
  return <div className={styles.codeblock}>{children}</div>;
};

export default CodeBlock;
