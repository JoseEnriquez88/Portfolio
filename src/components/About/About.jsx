"use client";
import styles from "./about.module.css";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import StackSlider from "../StackSlider/StackSlider";
import socials from "@/utils/socials";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";

const h1Variants = {
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

const articleVariants = {
  initial: {
    y: 0,
    opacity: 0,
  },
  animate: {
    y: -25,
    opacity: 1,
    transition: {
      duration: 1.5,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 1.9,
      repeat: Infinity,
    },
  },
};

const socialsVariants = {
  initial: {
    x: 0,
    opacity: 0,
  },
  animate: {
    x: 30,
    opacity: 1,
    transition: {
      duration: 2,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 1,
      repeat: Infinity,
    },
  },
};

const About = () => {
  const [isInView, setIsInView] = useState(false);
  const h1Ref = useRef();
  const articleRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const h1Element = h1Ref.current;
      const articleElement = articleRef.current;

      if (h1Element && articleElement) {
        const h1Rect = h1Element.getBoundingClientRect();
        const articleRect = articleElement.getBoundingClientRect();

        setIsInView(
          h1Rect.top < window.innerHeight &&
            articleRect.top < window.innerHeight
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
                <motion.article
                  className={styles.text}
                  variants={articleVariants}
                  initial="initial"
                  ref={articleRef}
                  animate={isInView && "animate"}
                >
                  I'm a web developer with strong skills in HTML, CSS, and
                  JavaScript, enabling me to create appealing interfaces.
                  Furthermore, I have experience in developing web applications
                  using technologies such as React, Next, and Redux/Toolkit. On
                  the server side, I employ Express and relational databases
                  like SQL, Prisma, and PostgreSQL to ensure efficient
                  performance and effective data management.
                </motion.article>
                <motion.div
                  className={styles.socialsContainer}
                  variants={socialsVariants}
                  initial="initial"
                  ref={articleRef}
                  animate={isInView && "animate"}
                >
                  <a href={socials.github}>
                    <GitHubIcon className={styles.icon} />
                  </a>
                  <a href={socials.linkedin}>
                    <LinkedInIcon className={styles.icon} />
                  </a>
                  <a href={socials.whatsapp}>
                    <WhatsAppIcon className={styles.icon} />
                  </a>
                  <a href={socials.mail}>
                    <EmailIcon className={styles.icon} />
                  </a>
                </motion.div>
              </div>
            </div>
            <div className={styles.imageContainer}>
              <img src="/SVG/about.png" alt="image" className={styles.image} />
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
