import styles from "./projects.module.css";
import { useEffect, useState } from "react";
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
  const h1Ref = useRef();
  const [h1InView, setH1InView] = useState(false);
  const isMobile = window.innerWidth <= 850;

  const handleScroll = () => {
    const h1Element = h1Ref.current;

    if (h1Element) {
      const h1Rect = h1Element.getBoundingClientRect();

      setH1InView(h1Rect.top < window.innerHeight);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    handleScroll();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.projectContainer}>
          <div className={styles.textContainer}>
            <motion.h1
              className={styles.title}
              variants={h1Variants}
              initial="initial"
              animate={h1InView ? "animate" : undefined}
              ref={h1Ref}
            >
              Projects
            </motion.h1>
          </div>
          <div className={styles.cardsContainer}>
            {isMobile ? <Carousel /> : <CardList />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
