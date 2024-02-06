"use client";
import styles from "./projects.module.css";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CardsList from "../Cards/CardsList";

const textVariants = {
  initial: {
    y: 0,
    opacity: 0,
  },
  animate: {
    y: -25,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 50,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

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
          <h1 className={styles.title}>Projects</h1>
          <h2>See my latest works</h2>
        </motion.div>
        <div className={styles.projectContainer}>
          <CardsList />
        </div>
      </div>
    </div>
  );
};

export default Projects;
