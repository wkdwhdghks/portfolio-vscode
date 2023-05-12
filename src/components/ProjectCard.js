import styles from "./ProjectCard.module.css";

function ProjectCard({ project }) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imgContainer}>
        <img
          src={project.image}
          alt={project.description}
          className={styles.cardImg}
        />
        <div className={styles.copyTag}>
          {project.copy === "personal" && "🙋‍♂️"}
          {project.copy === "company" && "🏢"}
          {project.copy === "team" && "👨‍💻"} {project.copy}
        </div>
      </div>

      <div className={styles.contentContainer}>
        <p className={styles.name}>{project.name}</p>
        <p className={styles.desc}>{project.description}</p>
        <div className={styles.tagContainer}>
          {project.tags.map((item, index) => (
            <span key={index} className={styles.skillTag}>
              #{item}
            </span>
          ))}
        </div>
      </div>

      {project.memo && (
        <a
          className={styles.memo}
          href={project.memo}
          target="_blank"
          rel="noopener noreferrer"
        >
          회고록
        </a>
      )}
      {project.career && (
        <a
          className={styles.career}
          href={project.career}
          target="_blank"
          rel="noopener noreferrer"
        >
          프로젝트 기술서
        </a>
      )}

      <div className={styles.linkContainer}>
        {project.source_code && (
          <a
            className={styles.sourceCode}
            href={project.source_code}
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        )}
        {project.demo && (
          <a
            className={styles.demo}
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
          >
            Demo
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
