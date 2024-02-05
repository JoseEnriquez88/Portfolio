"use client";
import styles from "./cardslist.module.css";
import { useEffect, useState } from "react";
import Content from "./Content";
import projects from "@/utils/projects.json";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import InsertLinkIcon from "@mui/icons-material/InsertLink";

const CardsList = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 800);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isMobile ? (
        <Content />
      ) : (
        <div className={styles.container}>
          {projects.data.map((project, index) => (
            <div className={styles.cardContainer} key={index}>
              <div className={styles.card}>
                {index % 2 !== 0 ? (
                  <>
                    <div className={styles.frontContent}>
                      <img
                        src={project.image}
                        alt="image"
                        className={styles.image}
                      />
                    </div>
                    <div className={styles.content}>
                      <p className={styles.heading}>{project.name}</p>
                      <p className={styles.type}>{project.type}</p>
                      <article className={styles.article}>
                        {project.description}
                      </article>
                      <div className={styles.iconContainer}>
                        <a
                          href={project.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.repoButton}
                        >
                          Repo
                          <ArrowForwardIcon />
                        </a>
                        {project.deploy && (
                          <a
                            href={project.deploy}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.deployButton}
                          >
                            Deploy
                            <InsertLinkIcon />
                          </a>
                        )}
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className={styles.content}>
                      <p className={styles.heading}>{project.name}</p>
                      <p className={styles.type}>{project.type}</p>
                      <article className={styles.article}>
                        {project.description}
                      </article>
                      <div className={styles.iconContainer}>
                        <a
                          href={project.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.repoButton}
                        >
                          Repo
                          <ArrowForwardIcon />
                        </a>
                        {project.deploy && (
                          <a
                            href={project.deploy}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.deployButton}
                          >
                            Deploy
                            <InsertLinkIcon />
                          </a>
                        )}
                      </div>
                    </div>
                    <div className={styles.frontContent}>
                      <img
                        src={project.image}
                        alt="image"
                        className={styles.image}
                      />
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default CardsList;
