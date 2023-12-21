import styles from "./cardList.module.css";
import projects from "../../utils/projects.json";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";

const containerVariants = {
  animate: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const cardsVariants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const CardList = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className={styles.container}
      variants={containerVariants}
      initial="initial"
      animate={isInView && "animate"}
      ref={ref}
    >
      {projects.data.map((project, index) => (
        <motion.div
          className={styles.cardContainer}
          key={index}
          variants={cardsVariants}
          animate={isInView && "animate"}
          ref={ref}
        >
          <div className={styles.card}>
            <div className={styles.frontContent}>
              <img
                src={project.image}
                alt="Si ves esto no cargó la imagen"
                className={styles.img}
              />
            </div>
            <div className={styles.content}>
              <p className={styles.heading}>{project.name}</p>
              <p>{project.type}</p>
              <div className={styles.iconContainer}>
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon className={styles.icon} />
                </a>
                {project.deploy && (
                  <a
                    href={project.deploy}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LanguageIcon className={styles.icon} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default CardList;
