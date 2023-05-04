import styles from "./Tags.module.css";

function TagOpen({ tagname, attr, attrValue, indent }) {
  const chkAttr = () => {
    switch (attr) {
      case undefined:
        return <span className={styles.attr}>{attr}</span>;
      default:
        return (
          <span className={styles.attr}>
            {attr}
            <span className={styles.tagname}>{" ="}</span>
          </span>
        );
    }
  };
  return (
    <div className={styles.tag} style={{ paddingLeft: `${indent * 0.5}em` }}>
      {"<"}
      <span className={styles.tagname}> {tagname} </span>
      {chkAttr()}
      <span className={styles.attr_value}> {attrValue} </span>
      {">"}
    </div>
  );
}

function TagClose({ tagname, indent }) {
  return (
    <div className={styles.tag} style={{ paddingLeft: `${indent * 0.5}em` }}>
      {"</"}
      <span className={styles.tagname_close}> {tagname} </span>
      {">"}
    </div>
  );
}

export { TagOpen, TagClose };
