import styles from "./landing.module.css";
import { motion } from "framer-motion";

const textVariants = {
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

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Landing = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <motion.div
          className={styles.textContainer}
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Jose Enriquez</motion.h2>
          <motion.h1 variants={textVariants}>Full Stack Developer</motion.h1>
        </motion.div>
      </div>
    </div>
  );
};

export default Landing;
