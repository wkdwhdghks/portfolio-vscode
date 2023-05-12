import { useEffect, useState } from "react";
import axios from "axios";
import ProjectCard from "../components/ProjectCard";
import styles from "./Projects.module.css";

function Projects() {
  const [project, setProject] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await axios.get("/data/project.json");
        setProject(result.data);
      } catch (error) {
        console.log("Data load failed:" + error);
      }
    };

    getData();
  }, []);

  return (
    <>
      <p className={styles.title}>It's my works! 💻</p>
      <div className={styles.gridContainer}>
        {project.map((item, index) => (
          <ProjectCard project={item} key={index} />
        ))}
      </div>
    </>
  );
}

export default Projects;
