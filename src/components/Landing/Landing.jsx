import styles from "./landing.module.css";
import { motion } from "framer-motion";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import SouthIcon from "@mui/icons-material/South";
import resume from "../../assets/resume/JoseCarlosEnriquezDominguezEnglishResume.pdf";

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
    y: 50,
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
          <motion.h1 variants={textVariants} className={styles.name}>
            Jose Enriquez
          </motion.h1>
          <motion.h2 variants={textVariants}>Full Stack Developer</motion.h2>
          <button className={styles.button}>
            <a href={resume} download="englishResume.pdf">
              <CloudDownloadIcon /> Resume
            </a>
          </button>
          <motion.div className={styles.iconContainer} variants={textVariants} animate="scrollButton">
            <SouthIcon />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Landing;
