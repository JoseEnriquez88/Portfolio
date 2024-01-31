"use client";
import styles from "./projects.module.css";

const Projects = () => {
  return (
    <div className={styles.container}>
      <dv className={styles.wrapper}>
        <h1 className={styles.title}>Projects</h1>
        <div className={styles.projectContainer}></div>
      </dv>
    </div>
  );
};

export default Projects;
