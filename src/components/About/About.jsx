import styles from "./about.module.css";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import StackSlider from "../StackSlider/StackSlider";

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

const spanVariants = {
  initial: {
    x: 1000,
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

const About = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.aboutContainer}>
          <div className={styles.textContainer}>
            <motion.h1
              className={styles.about}
              variants={h1Variants}
              initial="initial"
              animate={isInView && "animate"}
              ref={ref}
            >
              About Me
            </motion.h1>
            <motion.span
              className={styles.text}
              variants={spanVariants}
              initial="initial"
              ref={ref}
              animate={isInView && "animate"}
              // onScroll="visible"
            >
              I'm a web developer with strong skills in HTML, CSS, and
              JavaScript, allowing me to create appealing interfaces. I also
              have experience in developing web applications using React, Next
              and Redux/Toolkit on the frontend, and I use Express for the
              backend along with relational databases like SQL, Prisma and
              PostgreSQL.
            </motion.span>
          </div>
          <div className={styles.stackContainer}>
            <StackSlider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
