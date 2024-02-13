"use client";
import styles from "./projects.module.css";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CardsList from "../Cards/CardsList";
import { textVariants } from "./projectMotion";

const Projects = () => {
  const ref = useRef();
  const isInView = useInView(ref, { threshold: 0.5 });

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <motion.div
          className={styles.textContainer}
          variants={textVariants}
          ref={ref}
          animate={isInView && "animate"}
        >
          <h1 className={styles.title}>Proyectos</h1>
          <h2>Ver mis últimos proyectos</h2>
        </motion.div>
        <div className={styles.projectContainer}>
          <CardsList />
        </div>
      </div>
    </div>
  );
};

export default Projects;
