"use client";
import React, { useState } from "react";
import styles from "./hero.module.css";
import { Typewriter, Cursor } from "react-simple-typewriter";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import Waves from "../Waves/Waves";

const Hero = () => {
  const [count, setCount] = useState(0);

  const handleType = (count) => {
    setCount(count);
  };

  const handleDone = () => {
    console.log(`Done after 5 loops!`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.dataContainer}>
          <h1 className={styles.name}>Jose Enriquez</h1>
          <h2>
            <span>
              <Typewriter
                words={["Full stack", "React"]}
                loop={false}
                cursor
                // cursorStyle=""
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1500}
                onLoopDone={handleDone}
                onType={handleType}
              />
            </span>{" "}
            developer
          </h2>
          <button className={styles.button}>
            <a
              href="/resume/JoseCarlosEnriquezDominguezEnglishResume.pdf"
              download="englishResume.pdf"
            >
              <CloudDownloadIcon className={styles.icon} />
              Resume
            </a>
          </button>
        </div>
      </div>
      <div className={styles.wavesContainer}>
        <Waves />
      </div>
    </div>
  );
};

export default Hero;
