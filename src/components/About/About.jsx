import styles from "./about.module.css";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import StackSlider from "../StackSlider/StackSlider";
import about from "../../assets/SVG/about.png";

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
  const [isInView, setIsInView] = useState(false);
  const h1Ref = useRef();
  const pRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const h1Element = h1Ref.current;
      const pElement = pRef.current;

      if (h1Element && pElement) {
        const h1Rect = h1Element.getBoundingClientRect();
        const pRect = pElement.getBoundingClientRect();

        setIsInView(
          h1Rect.top < window.innerHeight && pRect.top < window.innerHeight
        );
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.aboutContainer}>
          <div className={styles.subContainer}>
            <div className={styles.textContainer}>
              <motion.h1
                className={styles.about}
                variants={h1Variants}
                initial="initial"
                animate={isInView && "animate"}
                ref={h1Ref}
              >
                About Me
              </motion.h1>
              <div className={styles.bioContainer}>
                <motion.p
                  className={styles.text}
                  variants={spanVariants}
                  initial="initial"
                  ref={pRef}
                  animate={isInView && "animate"}
                >
                  I am a web developer with strong skills in HTML, CSS, and
                  JavaScript, enabling me to create appealing interfaces.
                  Furthermore, I have experience in developing web applications
                  using technologies such as React, Next, and Redux/Toolkit. On
                  the server side, I employ Express and relational databases
                  like SQL, Prisma, and PostgreSQL to ensure efficient
                  performance and effective data management.
                </motion.p>
              </div>
            </div>
            <div className={styles.imageContainer}>
              <img
                src={about}
                alt="si ves esto no cargó la imagen"
                className={styles.image}
              />
            </div>
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
