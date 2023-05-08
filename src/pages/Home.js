import { SiVisualstudiocode } from "react-icons/si";
import styles from "./Home.module.css";
import { useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

function Home() {
  const [title, setTitle] = useState("");
  const [count, setCount] = useState(0);
  const text = "Hello 'Jong-hwan' World!";
  const { handleClick } = useOutletContext();
  const navigate = useNavigate();

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (count >= text.length) {
        return;
      }
      setTitle((prevTitleValue) => {
        let result = prevTitleValue ? prevTitleValue + text[count] : text[0];
        setCount(count + 1);
        return result;
      });
    }, 150);

    return () => {
      clearInterval(typingInterval);
    };
  });

  return (
    <div className={styles.container}>
      <SiVisualstudiocode className={styles.vscode} />
      <p className={styles.title}>{title}</p>
      <p className={styles.subtitle}>I'm Markup & Interactive web Developer</p>
      <div>
        <button
          className={styles.button}
          onClick={() => {
            navigate("/projects");
            handleClick("/projects");
          }}
        >
          View Work
        </button>
        <button
          className={styles.button}
          onClick={() => {
            navigate("/contact");
            handleClick("/contact");
          }}
        >
          Contact me
        </button>
      </div>
    </div>
  );
}

export default Home;
