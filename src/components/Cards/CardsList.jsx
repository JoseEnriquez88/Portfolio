import styles from "./cardslist.module.css";
import projects from "@/utils/projects.json";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const CardsList = () => {
  return (
    <div className={styles.container}>
      {projects.data.map((project, index) => (
        <div className={styles.cardContainer} key={index}>
          <div className={styles.card}>
            {index % 2 !== 0 ? (
              <>
                <div className={styles.frontContent}>
                  <img
                    src={project.image}
                    alt="image"
                    className={styles.image}
                  />
                </div>
                <div className={styles.content}>
                  <p className={styles.heading}>{project.name}</p>
                  <p className={styles.type}>{project.type}</p>
                  <article className={styles.article}>
                    {project.description}
                  </article>
                  <div className={styles.iconContainer}>
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.repoButton}
                    >
                      <ArrowForwardIcon />
                      Repo
                    </a>
                    {project.deploy && (
                      <a
                        href={project.deploy}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.deployButton}
                      >
                        <ArrowForwardIcon />
                        Deploy
                      </a>
                    )}
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className={styles.content}>
                  <p className={styles.heading}>{project.name}</p>
                  <p className={styles.type}>{project.type}</p>
                  <article className={styles.article}>
                    {project.description}
                  </article>
                  <div className={styles.iconContainer}>
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.repoButton}
                    >
                      <ArrowForwardIcon />
                      Repo
                    </a>
                    {project.deploy && (
                      <a
                        href={project.deploy}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.deployButton}
                      >
                        <ArrowForwardIcon />
                        Deploy
                      </a>
                    )}
                  </div>
                </div>
                <div className={styles.frontContent}>
                  <img
                    src={project.image}
                    alt="image"
                    className={styles.image}
                  />
                </div>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardsList;
