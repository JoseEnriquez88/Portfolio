import styles from "./projects.module.css";
import CardList from "../CardList/CardList";
import Carousel from "../Carousel/Carousel";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const h1Variants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const Projects = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });
  const isMobile = window.innerWidth <= 850;

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.projectContainer}>
          <div className={styles.textContainer}>
            <motion.h1
              className={styles.title}
              variants={h1Variants}
              initial="initial"
              animate={isInView && "animate"}
              ref={ref}
            >
              Projects
            </motion.h1>
            <div className={styles.cardsContainer}>
              {isMobile ? <Carousel /> : <CardList />}
              {/* <Carousel /> */}
              {/* <CardList /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
