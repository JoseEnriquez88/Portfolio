"use client";
import styles from "./cardslist.module.css";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import projects from "@/utils/projects.json";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import InsertLinkIcon from "@mui/icons-material/InsertLink";

const containerVariants = {
  animate: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const cardsVariants = {
  initial: {
    y: 0,
    opacity: 0,
  },
  animate: {
    y: -25,
    opacity: 1,
    transition: {
      duration: 1.5,
    },
  },
};

const Cards = () => {
  const containerRef = useRef();
  const isInView = useInView(containerRef, { margin: "-100px" });

  return (
    <motion.div
      className={styles.container}
      variants={containerVariants}
      initial="initial"
      animate={isInView && "animate"}
      ref={containerRef}
    >
      {projects.data.map((project, index) => (
        <motion.div
          className={styles.cardContainer}
          key={index}
          variants={cardsVariants}
          animate={isInView && "animate"}
          ref={containerRef}
        >
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
                      Repo
                      <ArrowForwardIcon />
                    </a>
                    {project.deploy && (
                      <a
                        href={project.deploy}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.deployButton}
                      >
                        Deploy
                        <InsertLinkIcon />
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
                      Repo
                      <ArrowForwardIcon />
                    </a>
                    {project.deploy && (
                      <a
                        href={project.deploy}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.deployButton}
                      >
                        Deploy
                        <InsertLinkIcon />
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
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Cards;
