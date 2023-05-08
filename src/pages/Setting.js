import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import styles from "./Setting.module.css";

const themeItems = [
  {
    name: "GitHub Dark",
    img: "/github-dark.png",
    publisher: "GitHub",
    theme: "githubDark",
  },
  {
    name: "Dracula",
    img: "/dracula.png",
    publisher: "Dracula Theme",
    theme: "dracula",
  },
];

function Setting() {
  const [select, setSelect] = useState(localStorage.getItem("theme"));
  const { toggleTheme } = useTheme();

  const handleClick = (theme) => {
    setSelect(theme);
    toggleTheme(theme);
  };

  return (
    <div className={styles.container}>
      <p className={styles.title}>Setting Color Themes ⚙️</p>
      <div className={styles.itemContainer}>
        {themeItems.map((item, index) => (
          <div key={index} className={styles.item}>
            <img
              src={`/images/${item.img}`}
              alt="theme-img"
              className={styles.img}
            />
            <p className={styles.name}>{item.name}</p>
            <p className={styles.publisher}>{item.publisher}</p>
            <button
              className={`${styles.button} ${
                select === item.theme ? styles.select : ""
              }`}
              onClick={() => handleClick(item.theme)}
            >
              set theme
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Setting;
