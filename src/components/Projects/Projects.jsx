"use client";
import styles from "./projects.module.css";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import CardsList from "../Cards/CardsList";

const textContainerVariants = {
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
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const Projects = () => {
  const textContainerRef = useRef();
  const [containerInView, setContainerInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const textElement = textContainerRef.current;
      if (textElement) {
        const textRect = textElement.getBoundingClientRect();
        setContainerInView(textRect.top < window.innerHeight);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // useEffect(() => {
  //   handleScroll();
  // }, []);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <motion.div
          className={styles.textContainer}
          variants={textContainerVariants}
          initial="initial"
          animate={containerInView && "animate"}
          ref={textContainerRef}
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
