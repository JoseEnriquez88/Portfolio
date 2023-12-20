import styles from "./projects.module.css";
import CardList from "../CardList/CardList";

const Projects = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.projectContainer}>
          <div className={styles.textContainer}>
            <h1 className={styles.title}>Projects</h1>
          <div className={styles.cardsContainer}>
            <CardList />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
