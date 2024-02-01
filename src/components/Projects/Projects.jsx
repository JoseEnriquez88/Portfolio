"use client";
import styles from "./projects.module.css";
import Cards from "../Cards/Cards";

const Projects = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Projects</h1>
          <h2>See my latest works</h2>
        </div>
        {/* <hr style={{color: "rgb(34,196,112)"}}/> */}
        <div className={styles.projectContainer}>
          <Cards />
        </div>
      </div>
    </div>
  );
};

export default Projects;
